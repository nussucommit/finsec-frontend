import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import useAuth from 'hooks/useAuth'
import { getToken } from 'utils/auth'

import Pages from 'pages'

import './App.css'

function App() {
  const { userLogin, adminLogin, logout } = useAuth()
  useEffect(() => {
    const fn = async () => {
      const token = getToken()

      if (token) {
        try {
          if (token.authType === 'USER') userLogin(token)
          else if (token.authType === 'ADMIN') adminLogin(token)
          else throw new Error()
        } catch {
          logout()
        }
      }
    }
    fn()
  }, [userLogin, adminLogin, logout])

  return (
    <ChakraProvider>
      <Pages />
    </ChakraProvider>
  )
}

export default App
