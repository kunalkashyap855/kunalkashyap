import { Inter } from 'next/font/google'
import Landing from '@/sections/Landing'
import About from '@/sections/About'
import Footer from '@/components/Footer'
import { useRef } from 'react'
import Projects from '@/sections/Projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const aboutSection = useRef(null);

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Landing Section */}
      <Landing />

      {/* About Section - including Skills */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />

    </main>
  )
}
