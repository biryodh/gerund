import { NextResponse, NextRequest } from 'next/server'
//import type { NextRequest } from 'next/server'

export function middleware (request) {
  //console.log(request.headers.get('authorization'));
  return NextResponse.next()
}

//  accept, authorization, host,