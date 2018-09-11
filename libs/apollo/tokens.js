import { parseCookies, destroyCookie, setCookie } from 'nookies'

const ACCESS_TOKEN = 'accessToken'
const REFRESH_TOKEN = 'refreshToken'

export const setAccessToken = (ctx, accessToken) => setCookie(ctx, ACCESS_TOKEN, accessToken, {
  maxAge: 30 * 24 * 60 * 60,
  path: '/',
})

export const setRefreshToken = (ctx, refreshToken) => setCookie(ctx, REFRESH_TOKEN, refreshToken, {
  maxAge: 30 * 24 * 60 * 60,
  path: '/',
})

export const getAccessToken = ctx => parseCookies(ctx)[ACCESS_TOKEN]

export const getRefreshToken = ctx => parseCookies(ctx)[REFRESH_TOKEN]

export const resetTokens = ctx => {
  destroyCookie(ctx, ACCESS_TOKEN)
  destroyCookie(ctx, REFRESH_TOKEN)
}

export const fetchAccessToken = async ctx => {
  const request = await fetch('/auth/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken: getRefreshToken(ctx),
    }),
  })

  const { accessToken } = await request.json()

  setAccessToken(accessToken)

  return accessToken
}
