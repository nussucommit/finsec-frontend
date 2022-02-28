// 1. external libraries
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

// 2. utility files
import { forgetPassword } from 'api/auth'

// 3. components
import { Input } from 'components/Form'

// 4. css
// import styles from ... 

interface Values {
  email: string
}

const UserForgotPassword = () => {
  const initialValues: Values = { email: '' }

  const validationSchema: yup.SchemaOf<Values> = yup.object({
    email: yup.string().required('Required'),
  })

  const handleForgetPassword = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    forgetPassword({ email: values.email })
    formikHelpers.setSubmitting(false)  
  }

  return (
    <div>
      <h1>Forgot Password</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleForgetPassword}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" placeholder="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserForgotPassword
