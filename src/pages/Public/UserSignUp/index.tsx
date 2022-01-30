import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { signup } from 'api/auth'
import history from 'utils/history'

import { Input } from 'components/Form'

interface Values {
  username: string
  password: string
}

const UserSignUp = () => {
  const initialValues: Values = { username: '', password: '' }

  const validationSchema: yup.SchemaOf<Values> = yup.object({
    username: yup.string().required('Required'),
    password: yup.string().required('Required'),
  })

  const handleSignup = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    signup({ username: values.username, password: values.password })
    formikHelpers.setSubmitting(false)
    history.push('/login')
  }

  return (
    <div>
      <h1>USER SIGNUP</h1>
      <Formik initialValues={initialValues} onSubmit={handleSignup} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="username">UserName</label>
          <Input id="username" name="username" placeholder="UserName" />
          <label htmlFor="password">Password</label>
          <Input id="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserSignUp
