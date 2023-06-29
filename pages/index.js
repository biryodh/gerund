import Head from 'next/head'
import Header from '@components/web/Header'
import Footer from '@components/web/Footer'
import Login from '@components/web/Login'
import Link from 'next/link'



export default function Home() {
  return (
    <>
      <Head>
        <title>Working...</title>
        <link rel="icon" href="/favicon.ico" />
     
      </Head>
      <div>
        <Header title="tess" />
          <a href={'/signin'} >Signin</a>
          <a href={'/about'} >About</a>
      </div>
    </>
  )
}
