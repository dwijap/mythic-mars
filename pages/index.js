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
            background-image: url("marsbg.jpeg"); }
        </style>
      </Head>

      <main>
        <Header title="MYTHIC MARS" />
        <form action="/html/tags/html_form_tag_action.cfm" method="get">
         First name:
        <input type="text" name="first_name" value="" maxlength="100" />
        <br />
         Last name:
        <input type="text" name="last_name" value="" maxlength="100" />
        <input type="submit" value="Submit" />
        </form>
    
      </main>
    </div>
  )
}
