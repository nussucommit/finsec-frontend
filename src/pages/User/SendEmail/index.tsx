import { useVerifyUser } from 'api/user'
import { useEffect } from 'react'
import { verificationEmail } from 'api/auth'


import Button from 'components/Button'

const SendEmail = () => {
    const { data: verifyUser } = useVerifyUser() 

    const sendVerificationEmail = async () => {

      try{
      console.log(100)
      await verificationEmail({
        uid:'100' //verifyUser.uid,
      })
      }
      catch{
        
      }
    }


    useEffect(() => {
      sendVerificationEmail();
    },[]
    )


    
    

    return (
      <div>
        <h1>Click The Button To Send The Verification Email</h1>
        <Button onClick={sendVerificationEmail}>Resend</Button>
      </div>
    )
  
   
}


export default SendEmail
