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
      <div className="w-full h-32 sm:h-52 overflow-hidden relative z-0 rounded-xs border border-neutral-200 dark:border-neutral-800 shadow-xs">
        <Image
          alt="Banner"
          width={1240}
          height={400}
          className="w-full h-full object-cover object-center"
          src={bannerImage}
          priority
        />
      </div>
      {/* Dashed separator below banner */}
      <div className="border-b border-dashed border-neutral-200 dark:border-neutral-800 mt-5" />
    </div>
  )
}
