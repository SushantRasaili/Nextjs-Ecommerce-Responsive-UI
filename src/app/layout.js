// "use client";

import Navbar from '@/components/navbar/Navbar'
import './globals.css'
// import { QueryClient,QueryClientProvider } from 'react-query'
import { Inter } from 'next/font/google'
import QueryProvider from '@/components/context/QueryProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Store',
  description: 'Buy anything you want',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryProvider>
        <div className='flex flex-col min-h-screen min-w-screen overflow-hidden'>
          <Navbar />
        {children}
        </div>
        </QueryProvider>
        </body>
    </html>
  )
}
