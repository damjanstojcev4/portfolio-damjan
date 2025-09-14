// app/page.tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactForm from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
    </main>
  )
}