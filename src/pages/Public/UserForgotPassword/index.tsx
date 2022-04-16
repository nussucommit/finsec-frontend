// 1. external libraries
import { Formik, Form, Field, FormikHelpers } from 'formik'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'

// 2. utility files
import { resetPassword } from 'api/auth'

// 3. components
import { Input } from 'components/Form'

// 4. css
// import styles from ...

interface Values {
  password: string
  confirm_new_password: string
}

const UserForgotPassword = () => {
  const id = useParams().uid!
  const initialValues: Values = { password: '', confirm_new_password: '' }
  

  const validationSchema: yup.SchemaOf<Values> = yup.object({
    password: yup.string().required('Required'),
    confirm_new_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const handleResetPassword = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    resetPassword({ password: values.password ,uid:id})
    formikHelpers.setSubmitting(false)
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <Formik initialValues={initialValues} onSubmit={handleResetPassword} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="password">New Password</label>
          <Input id="password" name="password" placeholder="password" />
          <label htmlFor="confirm_new_password">Confirm New Password</label>
          <Input id="confirm_new_password" name="confirm_new_password" placeholder="confirm_new_password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserForgotPassword
