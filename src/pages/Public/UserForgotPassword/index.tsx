// 1. external libraries
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

// 2. utility files
import request from 'api/request'

// 3. components

// 4. css
// import styles from ...

interface Values {
  email: string
}

const UserForgotPassword = () => {
  const loginURL = ''
  const initialValues: Values = { email: '' }

  const validationSchema: yup.SchemaOf<Values> = yup.object({
    email: yup.string().required('Required'),
  })

  return (
    <div>
      <h1>Forgot Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values, formikHelpers: FormikHelpers<Values>) => {
          console.log({ values, formikHelpers })
          request.post(loginURL, { email: values.email })
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="email">UserName</label>
          <Field id="email" name="email" placeholder="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserForgotPassword
