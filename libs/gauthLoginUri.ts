import { GAUTH_CLIENT_ID, REDIRECT_URI } from '@/utils'

export const gauthLoginUri = `https://gauth-msg.vercel.app/login?client_id=${GAUTH_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
