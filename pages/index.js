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
           <script async src="https://cse.google.com/cse.js?cx=0e9acb91c969b373f"></script>
           <div class="gcse-search"></div>
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
        <script type="text/javascript">
         algoliasearchNetlify({
         appId: '5SRLHGYB7I',
         apiKey: '<YOUR_ALGOLIA_SEARCH_API_KEY>',
         siteId: 'c75b9e6b-e410-4d43-82f6-3cadd245f2b9',
         branch: 'main',
         selector: 'div#search',
         });
        </script>
      </main>

      <Footer />
    </div>
  )
}
