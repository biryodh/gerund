import { NextResponse, NextRequest } from 'next/server'
import withAuth from "next-auth/middleware";

//import type { NextRequest } from 'next/server'
// Supports both a single string value or an array of matchers


export default withAuth(

  function middleware (request) {
    //console.log(request.headers.get('authorization'));
   
    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //   return NextResponse.rewrite(new URL('/signin', request.url))
    // }

    // if (request.nextUrl.pathname.startsWith('/w') && request.nextauth.token?.role!=="user") {
    //   return NextResponse.rewrite(new URL('/signin', request.url))
    // }

    return NextResponse.next();
    
  },
  {
    callbacks:{
      authorized:({token})=> !!token
    }
  }

)

export const config = {
  matcher: [ 
    '/dashboard/:path*',
    '/post/:path*',
    '/user/:path*',
    '/message/:path*',
    '/settings/:path*'
  ],
}



//export function middleware(request) {
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url))
  // }
 
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(new URL('/dashboard/user', request.url))
  // }
  
//}

//  accept, authorization, host,