import Nav from "@/components/layout/nav"
import { Hero } from "@/components/content"

import { Bai_Jamjuree } from 'next/font/google'

const BaiJamjuree = Bai_Jamjuree({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className={`flex flex-col ${BaiJamjuree.className}`}>
      <Nav />
      <Hero />
      <section className='flex flex-col z-10'>
        <section className="pt-32 pb-16 h-screen justify-center flex flex-col items-center text-center bg-secondary">
          <h1 className="text-4xl font-bold text-background-foreground">Coming Really Soon!</h1>
          <p className="text-2xl mt-2 text-muted-foreground">Upgrading NNEGARA Portfolio</p>
        </section>
        {/* <Image
          alt="profile"
          src={Profile}
        /> */}
      </section>
    </main>
  )
}
