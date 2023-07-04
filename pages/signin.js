import Head from 'next/head'
import Header from '@components/dash/Header'
import Footer from '@components/dash/Footer'
import Login from '@components/web/Login'
import { getSessionAuth } from './api/auth/[...nextauth]'

export async function getServerSideProps(ctx){
  const session = await getSessionAuth(ctx.req, ctx.res);
 
  if(session){
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
      props:{
        user:session.user
      },
    };
  }

  return {
    props:{
    }
  }
}

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
Home.auth= false;