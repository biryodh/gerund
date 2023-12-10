import Head from 'next/head'
import Header from '@components/web/Header'
import Footer from '@components/web/Footer'
import Login from '@components/web/Login'
import Link from 'next/link'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//import { UseTranslation } from 'next-i18next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'


export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale,['common', 'footer'], null, ['en', 'no'])),
    },
  }
}

export async function generateMetadata({ params }){

  return {
    title: "Profile",
    description:"Profile page description",
  };
}


export default function Home(props) {

  const { t , i18n} = useTranslation('common')
  const router = useRouter();
  console.log(router.pathname)
 
  return (
    <>
      <Head>
        <title>{router.pathname}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <div >
        <div id="header" className="fixed-top d-flex align-items-center">
          <div className="container d-flex ">
            {/* 
            <h1 className="logo_"><a href="index.html">Anyar</a></h1> */}
            
            {/* <a href="index.html" className="logo_"> <Image src="" alt="" className="img-fluid" /></a> */}

            <nav id="navbar" className="navbar">
              <ul>
                <li><Link href={'/dashboard'}>Dashboard</Link></li>
                {/* <li><a className="nav-link scrollto" href="#about">{t('ABOUT')}</a></li> */}
                {/* <li><a className="nav-link scrollto" href="#services">{i18n.language}</a></li> */}
                {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
                <li><a className="nav-link scrollto" href="#team">Team</a></li>
                <li><a className="nav-link scrollto" href="/generate-alert">Generate Alert</a></li>
                <li><Link href={'/signin'}><a className="nav-link scrollto" href="#">Sign In</a></Link></li>
                {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a  href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                  </ul>
                </li> */}
                {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

          </div>
        </div>

        <div id="hero" className="d-flex justify-cntent-center align-items-center">
          <div id="heroCarousel" data-bs-interval="5000" className="container_ carousel carousel-fade" data-bs-ride="carousel">

            
            <div className="carousel-item active">
              <div className="carousel-container_">
                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Anyar</span></h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>

          
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>

          
            <div className="carousel-item">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
              </div>
            </div>

            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
            </a>

            <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
            </a>

          </div>
        </div>

          
      </div>
    </>
  )
}
