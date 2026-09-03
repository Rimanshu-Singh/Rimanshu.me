'use client'

import Image from 'next/image'

interface BannerSectionProps {
  bannerImage?: string
  quote?: string
}

export default function BannerSection({
  bannerImage = "/banner.jpg"
}: BannerSectionProps) {
  return (
    <div className="w-full px-4 sm:px-8 mb-4 relative">
      <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xs">
        <Image
          alt="Banner"
          width={1240}
          height={400}
          className="w-full h-[180px] sm:h-[240px] md:h-[260px] object-cover"
          src={bannerImage}
          priority
        />
      </div>
      {/* Dashed separator below banner */}
      <div className="border-b border-dashed border-neutral-200 dark:border-neutral-800 mt-5" />
    </div>
  )
}
