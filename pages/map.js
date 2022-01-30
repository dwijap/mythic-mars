
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
    
      <main>
        <iframe src="https://trek.nasa.gov/treklite//?l=Mars_Viking_MDIM21_ClrMosaic_global_232m,true,1&v=0.1&x=0&y=0&z=1&p=urn%3Aogc%3Adef%3Acrs%3AEPSG%3A%3A104905&d=&locale=&b=mars&e=-253.12499527831596%2C-144.14062231126326%2C253.12499527831596%2C144.14062231126326&sfz=&w=" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
      </main>
    </div>
  )
}
