import { ROLE } from 'constants/roles'
import session, { SessionStorageKey } from './sessionStorage'

export const getToken = () => {
  const access = session.getItem(SessionStorageKey.access)
  const refresh = session.getItem(SessionStorageKey.refresh)
  const authType = session.getItem(SessionStorageKey.authType) as ROLE.User | ROLE.Admin
  if (access && refresh) return { access, refresh, authType }
}

export const saveToken = (token: Token, authType: ROLE.User | ROLE.Admin) => {
  session.setItem(SessionStorageKey.access, token.access)
  session.setItem(SessionStorageKey.refresh, token.refresh)
  session.setItem(SessionStorageKey.authType, authType)
}

export const deleteToken = () => {
  session.removeItem(SessionStorageKey.access)
  session.removeItem(SessionStorageKey.refresh)
}
