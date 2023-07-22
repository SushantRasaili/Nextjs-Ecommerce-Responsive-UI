"use client";

import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient,QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Store',
  description: 'Buy anything you want',
}

export default function RootLayout({ children }) {

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <div className='flex flex-col min-h-screen min-w-screen overflow-hidden'>
          <Navbar />
        {children}
        </div>
        </QueryClientProvider>
        </body>
    </html>
  )
}
