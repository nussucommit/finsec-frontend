import { useVerifyUser } from 'api/user'

import MainPage from '../MainPage';
import SendEmail from '../SendEmail'

const Home = () => {
    const {data : verifyUser} = useVerifyUser(); 
    if (verifyUser?.verified == true) {
      return (
        <div>
          <MainPage />
        </div>
      )
    }
    return <SendEmail/>


}

export default Home
