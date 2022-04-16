// 1. external libraries
import { useParams } from 'react-router-dom'
import { confirmEmail } from 'api/auth'
import { useEffect } from 'react'

// 2. utility files

// 3. components
import Button from '@chakra-ui/react'

// 4. css
// import styles from ...

const EmailVerification = () => {
  const id = useParams().uid!

  const handleConfirmEmail = async () => {
    try {
      console.log(id)
      await confirmEmail({
        uid: id,
      })
    } catch {}
  }
  useEffect(() => {
    handleConfirmEmail()
  }, [])

  return (
    <div>
      <h1>Confirm Email</h1>
      <Button onClick={handleConfirmEmail}>Verify</Button>
    </div>
  )
}

export default EmailVerification
