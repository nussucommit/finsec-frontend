import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { Routes } from 'constants/routes'
import { login } from 'api/auth'
import history from 'utils/history'

import { Input } from 'components/Form'

import styles from './UserLogin.module.css'

interface Values {
  UserName: string
  Password: string
}
const UserLogin = () => {
  const initialValues: Values = { UserName: '', Password: '' }

  // validation schema
  const validationSchema: yup.SchemaOf<Values> = yup.object({
    UserName: yup.string().required('Required'),
    Password: yup.string().required('Required'),
  })

  const { userLogin } = useAuth()

  const handleLogin = async (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    // Change to async await syntax
    const { data: token } = await login({
      username: values.UserName.toLowerCase(),
      password: values.Password,
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
          <label htmlFor="UserName">UserName</label>
          <Input id="UserName" name="UserName" placeholder="UserName" />
          <label htmlFor="Password">Password</label>
          <Input id="Password" name="Password" placeholder="Password" />
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
