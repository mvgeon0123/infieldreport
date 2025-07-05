// app/category/[category]/page.tsx

import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from '@/lib/utils/contentlayer'
import { Metadata } from 'next'
import ListLayout from '@/layouts/ListLayout'
import { slug } from '@/lib/utils/slugify'

type Props = {
  params: {
    category: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const category = decodeURIComponent(params.category)
  return {
    title: `Category: ${category}`,
    description: `Posts in category: ${category}`,
  }
}

export default function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.category)
  const filteredPosts = allCoreContent(
    sortPosts(
      allBlogs.filter((post) => slug(post.category) === slug(category))
    )
  )

  return (
    <ListLayout
      posts={filteredPosts}
      title={`"${category}" 카테고리 글`}
    />
  )
}
