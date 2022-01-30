import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { Link } from 'react-router-dom'
import { Routes } from 'constants/routes'
import { login } from 'api/auth'
import useAuth from 'hooks/useAuth'
import history from 'utils/history'

import { Input } from 'components/Form' 

import styles from './UserLogin.module.css'

interface Values {
  username: string
  password: string
}
const UserLogin = () => {
  const initialValues: Values = { username: '', password: '' }

  // validation schema
  const validationSchema: yup.SchemaOf<Values> = yup.object({
    username: yup.string().required('Required'),
    password: yup.string().required('Required'),
  })

  const { userLogin } = useAuth()

  const handleLogin = async (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    // Change to async await syntax
    const { data: token } = await login({
      username: values.username.toLowerCase(),
      password: values.password,
    })
    userLogin(token);
    formikHelpers.setSubmitting(false);
    history.push('/');
  }

  return (
    <div>
      <h1 className={styles.test}>USER LOGIN</h1>
      <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="username">UserName</label>
          <Input id="username" name="username" placeholder="UserName" />
          <label htmlFor="password">Password</label>
          <Input id="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <Link to={Routes.signup}>
        <button>SignUp</button>
      </Link>
      <Link to={Routes.forget}>
        <button>Forgotten Password?</button>
      </Link>
    </div>
  )
}

export default UserLogin
