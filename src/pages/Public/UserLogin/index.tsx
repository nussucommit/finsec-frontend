import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { Link } from 'react-router-dom'
import styles from './UserLogin.module.css'
import request from 'api/request'
import useAuth from 'hooks/useAuth'


import { Routes } from 'constants/routes'

interface Values {
  UserName: string
  Password: string
}
const UserLogin = () => {
  const loginURL = ''
  const initialValues: Values = { UserName: '', Password: '' }

  // validation schema
  const validationSchema: yup.SchemaOf<Values> = yup.object({
    UserName: yup.string().required('Required'),
    Password: yup.string().required('Required'),
  })

  const { userLogin } = useAuth()

  const handleLogin = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })

    // Change to async await syntax
    request
      .post(loginURL, { username: values.UserName, password: values.Password })
      .then(response => userLogin({ refresh: response.data.refresh, access: response.data.access }))
  }

  return (
    <div>
      <h1 className={styles.test}>USER LOGIN</h1>
      <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="UserName">UserName</label>
          <Field id="UserName" name="UserName" placeholder="UserName" />
          <label htmlFor="Password">Password</label>
          <Field id="Password" name="Password" placeholder="Password" />
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
