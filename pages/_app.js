import '@styles/globals.css';
import '@styles/vendors/mdi/css/materialdesignicons.min.css';
import '@styles/vendors/feather/feather.css';
import '@styles/vendors/base/vb.css';
import "@styles/css/style.css"
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import { Provider } from "next-auth/client"

function Application({ Component, pageProps }) {
  
  return (
    <SessionProvider session={pageProps.session}>    
      { Component.auth ? (
      <Auth>
          <Component {...pageProps} />
      </Auth>)  : ( <Component {...pageProps} />) }
    </SessionProvider>
  )
}

export default Application

const Auth=({children})=>{

  const router = useRouter(); 
  const {data:session, status } = useSession();
  const isUser = !!session?.user;
  const loading  = status==='loading';

  useEffect(()=>{
    if(!loading){
      if(!isUser){
        router.push('/signin')
      }
    }
  },[loading,isUser])

  if(loading){
    return <h3>Loading...</h3>
  }

  if(!loading && isUser){
    return (<>
      {children}
    </>)
  }

  return null; 
}
