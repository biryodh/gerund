import Head from 'next/head'
import Header from '@components/dash/Header'
import Footer from '@components/dash/Footer'
import Login from '@components/web/Login'



export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tracer!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />

    </div>
  )
}
