import { Inter } from 'next/font/google'
import Landing from '@/sections/Landing'
import About from '@/sections/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Landing Section */}
      <Landing />

      {/* About Section - including Skills */}
      <About />

      {/* Projects */}

    </main>
  )
}
