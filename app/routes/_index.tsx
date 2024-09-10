import { getProjects } from '@/lib/contentful.server'
import Hero from '@/components/Hero'
import List from '@/components/List'
import Footer from '@/components/Footer'
import { json, useLoaderData } from '@remix-run/react'

export async function loader() {
  const preojects = await getProjects()

  return json(preojects)
}

export default function Index() {
  const items = useLoaderData<typeof loader>()

  return (
    <div className="mx-auto space-y-[8.5vw] overflow-hidden px-[min(4vw,4em)] pb-10 antialiased">
      <Hero />
      <List items={items} />
      <Footer />
    </div>
  )
}
