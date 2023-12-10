import Head from 'next/head'
import Header from '@components/dash/Header'
import Footer from '@components/dash/Footer'
import Login from '@components/web/Login'
import { getSessionAuth } from './api/auth/[...nextauth]'
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
    </div>
  )
}
Home.auth= false;