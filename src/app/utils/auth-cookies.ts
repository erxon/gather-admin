import { serialize, parse } from 'cookie'
import type { NextRequest, NextResponse } from 'next/server'
import {headers} from 'next/headers'

const TOKEN_NAME = 'token'

export const MAX_AGE = 60 * 60 * 8 // 8 hours

export function setTokenCookie(res: Response, token: any) {
  const cookie = serialize(TOKEN_NAME, token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })
  res.headers.append('Set-Cookie', cookie)
}

export function removeTokenCookie(res: Response) {
  const cookie = serialize(TOKEN_NAME, '', {
    maxAge: -1,
    path: '/',
  })
  res.headers.append('Set-Cookie', cookie)
}

export function parseCookies(req: NextRequest) {
  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies
  
  // For pages we do need to parse the cookies.
  const headersList = headers()
  const cookie = headersList.get('cookies')
  return parse(cookie || '')
}

export function getTokenCookie(req: NextRequest) {
  const cookies = parseCookies(req)
  return cookies.toString()
}