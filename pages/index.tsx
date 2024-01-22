import Nav from "@/components/layout/nav"

export default function Home() {
  return (
    <main className='flex flex-col p-24'>
      <Nav />

      <section className="py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Coming Really Soon!</h1>
        <p className="text-2xl">Upgraded NNEGARA Portfolio</p>
      </section>
    </main>
  )
}
