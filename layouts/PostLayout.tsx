'use client'

import { ReactNode } from 'react'
import type { Blog, Authors } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, children }: LayoutProps) {
  const { date, title, tags } = content

  const authorNames = authorDetails.map((a) => a.name).join(', ')

  return (
    <SectionContainer>
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* 날짜 + 저자 */}
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          {authorNames && ` · by ${authorNames}`}
        </p>

        {/* 제목 */}
        <h1 className="mb-6 text-5xl leading-tight font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>

        {/* 본문 */}
        <div className="prose prose-lg dark:prose-invert max-w-none pb-8">{children}</div>

      {/* 카테고리 */}
{content.category && (
  <div className="mt-10 border-t pt-6">
    <div className="mb-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">
      Category
    </div>
    <div className="text-base font-medium text-primary-500 dark:text-primary-400">
      {content.category}
    </div>
  </div>
)}
      </article>
    </SectionContainer>
  )
}
