import Hero from '@/components/Hero'
import { Advantages } from '@/components/Advantages'
import { Challenges } from '@/components/Challenges'
import { Solutions } from '@/components/Solutions'
import { Process } from '@/components/Process'
import { MarketData } from '@/components/MarketData'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Advantages />
      <Challenges />
      <Solutions />
      <Process />
      <MarketData />
      <FAQ />
      <Contact />
    </main>
  )
}
