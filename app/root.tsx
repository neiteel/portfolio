import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import './tailwind.css'

export const meta: MetaFunction = () => {
  return [
    { title: "Eddy's Frontend Portfolio" },
    {
      robots: 'noindex, nofollow',
    },
    {
      property: 'og:title',
      content: "Eddy's Frontend Portfolio",
    },
    {
      property: 'og:site_name',
      content: "Eddy's Frontend Portfolio",
    },
    {
      property: 'og:url',
      content: 'https://tainlee.dev',
    },
    {
      property: 'og:description',
      content: 'I am a web developer. ლ(́◕◞౪◟◕‵ლ)',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/og-image.jpg',
    },
    {
      name: 'description',
      content: 'I am a web developer. ლ(́◕◞౪◟◕‵ლ)',
    },
  ]
}

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=block',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
