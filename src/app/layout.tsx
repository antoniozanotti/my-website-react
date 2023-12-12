import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import '@assets/styles.css'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Antônio Zanotti: Mid-level Frontend Developer',
  description: 'Senior Full Stack Developer with more than 15 years of experience. Looking for long-term opportunities to work as Frontend Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} bg-dark-2 dark:bg-dark-dark-2 text-primary dark:text-dark-primary`}>{children}</body>
    </html>
  )
}
