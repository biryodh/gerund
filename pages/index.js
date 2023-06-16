import Head from 'next/head'
import Header from '@components/web/Header'
import Footer from '@components/web/Footer'
import Login from '@components/web/Login'
import Link from 'next/link'



export default function Home() {
  return (
    < >
      <Head>
        <title>Tracer!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      </Head>
      <div>
        <Header title="tess" />
          <Link href={'/signin'} >Signin</Link>
          <Link href={'/about'} >About</Link>
      </div>
    </>
  )
}
