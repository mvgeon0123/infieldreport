// app/layout.tsx
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import siteMetadata from '@/data/siteMetadata'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer' // ❗ 삭제했다면 주석 처리 또는 제거

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans text-black bg-white dark:bg-gray-900 dark:text-white`}>
        <SectionContainer>
          <div className="flex h-screen flex-col justify-between">
            <Header />
            <main className="mb-auto">{children}</main>
            {/* <Footer /> // ← Footer를 삭제했으면 주석 처리 또는 삭제 */}
          </div>
        </SectionContainer>
      </body>
    </html>
  )
}
