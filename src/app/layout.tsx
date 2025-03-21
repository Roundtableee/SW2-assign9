import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import TopMenu from '@/components/TopMenu'

// เพิ่ม import
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import NextAuthProvider from '@/providers/NextAuthProvider'

export const metadata: Metadata = {
  title: 'My Venue Explorer',
  description: 'A simple venue booking site',
}

// ทำเป็น async function เพื่อ await getServerSession
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // เรียก getServerSession ด้วย authOptions
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        {/* ครอบ NextAuthProvider (client component) ด้วย session */}
        <NextAuthProvider session={session}>
          <TopMenu />
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  )
}
