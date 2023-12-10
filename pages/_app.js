import '@styles/globals.css';
import '@styles/vendors/mdi/css/materialdesignicons.min.css';
import '@styles/vendors/feather/feather.css';
import '@styles/vendors/base/vb.css';
import "@styles/css/style.css"
import "@styles/vendors/aos/aos.css"
import "@styles/vendors/boxicons/css/boxicons.min.css"
import "@styles/vendors/glightbox/css/glightbox.min.css"
import "@styles/vendors/remixicon/remixicon.css"
import "@styles/vendors/swiper/swiper-bundle.min.css"
import "@styles/css/home.css"
import 'react-toastify/dist/ReactToastify.css';

import { appWithTranslation } from 'next-i18next';

import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
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

export default appWithTranslation(Application)

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
