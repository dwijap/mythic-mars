import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mythic mars</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
         body{
            background-image: url("marsbs.jpeg"); }
        </style>
      </Head>

      <main>
        <Header title="MYTHIC MARS" />
    
        <script async src="https://cse.google.com/cse.js?cx=0e9acb91c969b373f"></script>
        <div class="gcse-search"></div>
    
      </main>
    </div>
  )
}
