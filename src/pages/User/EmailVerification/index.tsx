// 1. external libraries
import { useParams } from 'react-router-dom'
import { confirmEmail } from 'api/auth'

// 2. utility files

// 3. components
import Button from 'components/Button'

// 4. css
// import styles from ...

const EmailVerification = () => {
  const id = useParams().id!

  const handleConfirmEmail = async () => {
    await confirmEmail({
      uid: id,
    })
  }

  handleConfirmEmail();

  return (
    <div>
      <h1>Confirm Email</h1>
      <Button onClick={handleConfirmEmail}>Verify</Button>
    </div>
  )
}

export default EmailVerification
