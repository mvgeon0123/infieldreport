import { allBlogs } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  // 중복 제거된 카테고리 리스트 생성
  const categories = Array.from(new Set(allBlogs.map((post) => post.category)))
  return categories.map((category) => ({ category }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent(params.category)
  const postsInCategory = allBlogs.filter((post) => post.category?.toLowerCase() === category.toLowerCase())

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Category: <span className="text-primary-500">{category}</span>
      </h1>

      {postsInCategory.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-6">
          {postsInCategory.map((post) => {
            const content = coreContent(post)
            return (
              <li key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <h2 className="text-xl font-semibold text-primary-500 hover:underline">{content.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{content.summary}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
