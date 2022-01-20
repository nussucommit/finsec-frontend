import create from 'zustand'

import { saveToken, deleteToken } from 'utils/auth'
import session, { SessionStorageKey } from 'utils/sessionStorage'
import { ROLE } from 'constants/roles'

type AuthState = {
  isAuth: ROLE.User | ROLE.Admin | undefined
  userLogin: (token: Token) => void
  adminLogin: (token: Token) => void
  logout: () => void
}

/**
 * React hook to handle user client-side authentication
 *
 * @returns a react context
 */
const useAuth = create<AuthState>(set => ({
  isAuth: undefined,
  userLogin: token => {
    saveToken(token, ROLE.User)
    session.removeItem(SessionStorageKey.sessionTimedOut)
    set({ isAuth: ROLE.User })
  },
  adminLogin: token => {
    saveToken(token, ROLE.Admin)
    session.removeItem(SessionStorageKey.sessionTimedOut)
    set({ isAuth: ROLE.Admin })
  },
  logout: () => {
    deleteToken()
    set({ isAuth: undefined })
  },
}))

export default useAuth
