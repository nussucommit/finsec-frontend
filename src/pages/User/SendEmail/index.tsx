
import { useParams } from 'react-router-dom'
import { verificationEmail } from 'api/auth'


import Button from 'components/Button'


const SendEmail = () => {
    const id = useParams().id!


    const sendVerificationEmail = async () => {
      await verificationEmail({
        uid: id,
      })
    }
    
    sendVerificationEmail();

    return (
      <div>
        <h1>ClickTheButtonToSendTheVerificationEmail</h1>
        <Button onClick={sendVerificationEmail}>Resend</Button>
      </div>
    )
  
   
}


export default SendEmail
