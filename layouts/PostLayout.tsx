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

export default function PostLayout({ content, children }: LayoutProps) {
  const { date, title, tags } = content

  return (
    <SectionContainer>
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* 날짜 */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
        </p>

        {/* 제목 */}
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-6">
          {title}
        </h1>

        {/* 본문 */}
        <div className="prose dark:prose-invert max-w-none pb-8">{children}</div>

        {/* 태그 */}
        {tags && tags.length > 0 && (
          <div className="mt-10 border-t pt-6">
            <div className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        )}
      </article>
    </SectionContainer>
  )
}
