import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mythic mars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="MYTHIC MARS" />
    <div className="container">
        <form action="/html/tags/html_form_tag_action.cfm" method="get">
         what would you like to know about? 
        <br />
        <input type="text" name="input_text" value="" maxlength="300" />
        
        <input type="submit" value="go!" />
    <div>
        </form>
    
      </main>
    </div>
  )
}
