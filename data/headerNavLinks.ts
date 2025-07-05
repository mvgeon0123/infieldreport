// data/headerNavLinks.ts
const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/category/MLB', title: 'MLB' },
  { href: '/category/KBO', title: 'KBO' },
  { href: '/category/Theory', title: 'Theory' },
  { href: '/category/Baseball', title: 'Baseball' },
  { href: '/about', title: 'About' },
]

export default headerNavLinks

// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// lib/utils/slugify.ts
export default function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// lib/utils/contentlayer.ts (간단한 예시, contentlayer에 따라 조정)
export function sortPosts(posts: any[]) {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

// components/Header.tsx (정리된 버전)
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
