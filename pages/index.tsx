import Nav from "@/components/layout/nav"
import Image from "next/image"

import Profile from "@/assets/ProfileNN-BW.png"

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Nav />
      <main className='flex flex-col p-4'>
        <section className="py-24 h-[calc(100vh-121px)] justify-center flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold">Coming Really Soon!</h1>
          <p className="text-2xl mt-2 text-muted-foreground">Upgrading NNEGARA Portfolio</p>
        </section>
        {/* <Image
          alt="profile"
          src={Profile}
        /> */}
      </main>
    </div>
  )
}
