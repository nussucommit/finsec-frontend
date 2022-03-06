import { Link } from 'react-router-dom'

import { Routes } from 'constants/routes'

import styles from './UserLogin.module.css'

const Home = () => {
  return (
    <div>
      <p>USERHOME</p>
      <p>to be added: table of prev quotations with status </p>
      <Link to={Routes.createForm}>Create Quotation</Link>
    </div>
  )
}

export default Home
