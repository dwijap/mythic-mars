import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="MYTHIC MARS" />
           <div class="button">
      <%= link_to "Search", "/guides/getting_started.html" %>
    </div>
      </main>

      <Footer />
    </div>
  )
}
