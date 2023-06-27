import '@styles/globals.css';
import '@styles/vendors/mdi/css/materialdesignicons.min.css';
import '@styles/vendors/feather/feather.css';
import '@styles/vendors/base/vb.css';
import "@styles/css/style.css"
import { SessionProvider } from 'next-auth/react';
//import { Provider } from "next-auth/client"

function Application({ Component, pageProps }) {
  //console.log(pageProps);

  return (
    <SessionProvider >
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default Application
