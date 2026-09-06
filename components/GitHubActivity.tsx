'use client'

import React, { useEffect, useState } from 'react'

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface ContributionWeek {
  contributionDays: ContributionDay[]
}

interface GitHubActivityProps {
  username?: string
}

export default function GitHubActivity({ username = 'Rimanshu-Singh' }: GitHubActivityProps) {
  const [contributions, setContributions] = useState<ContributionWeek[]>([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchContributions = async () => {
      try {
        setLoading(true)

        // Fetch past 1 year of contributions directly using y=last
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)

        if (!response.ok) {
          throw new Error('Failed to fetch contributions from API')
        }

        const data = await response.json()
        const days: ContributionDay[] = data.contributions || []

        if (!days.length) {
          throw new Error('No contribution data found')
        }

        // Build week columns (Sunday - Saturday)
        const weeks: ContributionWeek[] = []
        let currentWeek: ContributionDay[] = []
        let isFirstDay = true

        days.forEach((day) => {
          const date = new Date(day.date + 'T00:00:00')
          const dayOfWeek = date.getDay()

          // Pad initial week if not starting on Sunday
          if (isFirstDay && dayOfWeek !== 0) {
            for (let i = 0; i < dayOfWeek; i++) {
              currentWeek.push({
                date: '',
                count: 0,
                level: 0,
              })
            }
          }
          isFirstDay = false

          if (dayOfWeek === 0 && currentWeek.length > 0) {
            weeks.push({ contributionDays: currentWeek })
            currentWeek = []
          }

          currentWeek.push({
            date: day.date,
            count: day.count,
            level: day.level,
          })
        })

        if (currentWeek.length > 0) {
          while (currentWeek.length < 7) {
            currentWeek.push({
              date: '',
              count: 0,
              level: 0,
            })
          }
          weeks.push({ contributionDays: currentWeek })
        }

        if (isMounted) {
          setContributions(weeks)
          const total = data.total?.lastYear ?? days.reduce((sum, d) => sum + d.count, 0)
          setTotalContributions(total)
          setError(null)
        }
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err)
        if (isMounted) {
          setError('Failed to load GitHub activity')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchContributions()

    return () => {
      isMounted = false
    }
  }, [username])

  const getContributionColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-200 dark:bg-emerald-950 border border-emerald-300/40 dark:border-emerald-800/40'
      case 2:
        return 'bg-emerald-300 dark:bg-emerald-800 border border-emerald-400/40 dark:border-emerald-700/40'
      case 3:
        return 'bg-emerald-400 dark:bg-emerald-600 border border-emerald-500/40 dark:border-emerald-500/40'
      case 4:
        return 'bg-emerald-600 dark:bg-emerald-400 border border-emerald-600/40 dark:border-emerald-300/40'
      default:
        return 'bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/50 dark:border-neutral-700/30'
    }
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const getMonthLabels = () => {
    if (contributions.length === 0) return []

    const labels: { month: string; position: number }[] = []
    let currentMonth = -1
    let lastLabelPosition = -5

    contributions.forEach((week, weekIndex) => {
      const validDay = week.contributionDays.find((day) => day.date !== '')
      if (validDay) {
        const date = new Date(validDay.date + 'T00:00:00')
        const month = date.getMonth()

        if (month !== currentMonth) {
          if (weekIndex - lastLabelPosition >= 3) {
            labels.push({ month: months[month], position: weekIndex })
            lastLabelPosition = weekIndex
          }
          currentMonth = month
        }
      }
    })

    return labels
  }

  const monthLabels = getMonthLabels()
  const totalWeeks = contributions.length || 53

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-3 border-b border-dashed border-neutral-300 dark:border-neutral-800 mb-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight font-normal">
          GitHub Activity
        </h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-neutral-500 hover:text-foreground font-mono transition-colors"
        >
          @{username}
        </a>
      </div>

      {loading ? (
        <div className="w-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 sm:p-6">
          <div className="h-4 w-48 bg-neutral-200 dark:bg-neutral-800 rounded mb-4 animate-pulse" />
          <div className="overflow-x-auto pb-2">
            <div
              className="grid gap-[3px] min-w-[650px]"
              style={{ gridTemplateColumns: `repeat(${totalWeeks}, 1fr)` }}
            >
              {Array.from({ length: totalWeeks }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {Array.from({ length: 7 }).map((_, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="aspect-square w-full rounded-[2px] bg-neutral-200 dark:bg-neutral-800 animate-pulse"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="w-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-6 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">{error}</p>
        </div>
      ) : (
        <div className="w-full rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20 p-4 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              <span className="font-semibold text-foreground">{totalContributions.toLocaleString()}</span> contributions in the last year
            </p>
          </div>

          <div className="overflow-x-auto pb-1">
            <div className="min-w-[650px]">
              {/* Month Labels */}
              <div
                className="grid text-[10px] text-neutral-500 dark:text-neutral-400 mb-2 font-mono"
                style={{ gridTemplateColumns: `repeat(${totalWeeks}, 1fr)` }}
              >
                {monthLabels.map((label, index) => (
                  <div
                    key={index}
                    className="text-left"
                    style={{ gridColumn: label.position + 1 }}
                  >
                    {label.month}
                  </div>
                ))}
              </div>

              {/* Contribution Grid */}
              <div
                className="grid gap-[3px]"
                style={{ gridTemplateColumns: `repeat(${totalWeeks}, 1fr)` }}
              >
                {contributions.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.contributionDays.map((day, dayIndex) => {
                      if (!day.date) {
                        return (
                          <div
                            key={dayIndex}
                            className="aspect-square w-full rounded-[2px] opacity-0 pointer-events-none"
                          />
                        )
                      }

                      return (
                        <div
                          key={dayIndex}
                          className={`aspect-square w-full rounded-[2px] transition-all hover:scale-125 hover:z-10 cursor-pointer ${getContributionColor(
                            day.level
                          )}`}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${new Date(
                            day.date + 'T00:00:00'
                          ).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Legend */}
          <div className="flex items-center justify-end mt-4 gap-2 text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-sans">
            <span>Less</span>
            <div className="flex gap-[3px] items-center">
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`w-[10px] h-[10px] rounded-[2px] ${getContributionColor(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      )}
    </div>
  )
}
