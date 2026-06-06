'use client'

import Image from 'next/image'

interface BannerSectionProps {
  quote?: string
  bannerImage?: string
}

export default function BannerSection({
  quote = "You make your own luck if you stay at it long enough.",
  bannerImage = "/banner.jpg"
}: BannerSectionProps) {
  return (
    <div className="w-full px-4 sm:px-8 mb-2 relative">
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-zinc-200/50 dark:border-zinc-800/50">
        <Image
          alt="Banner"
          width={1240}
          height={900}
          className="w-full h-[180px] sm:h-[260px] object-cover"
          src={bannerImage}
          style={{ color: 'transparent', minHeight: '100px' }}
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <p className="text-white text-base sm:text-xl font-medium italic font-[family-name:var(--font-instrument-serif)] text-center drop-shadow-md">
            "{quote}"
          </p>
        </div>
      </div>
    </div>
  )
}
