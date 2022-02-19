// 1. external libraries
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

// 2. utility files
import { confirmEmail } from 'api/auth'

// 3. components
import { Input } from 'components/Form'

// 4. css
// import styles from ...

interface Values {
  code: string
}

const EmailVerification = () => {
  const initialValues: Values = { code: '' }

  const validationSchema: yup.SchemaOf<Values> = yup.object({
    code: yup.string().required('Required'),
  })

  const handleConfirmEmail = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    confirmEmail({ code: values.code })
    formikHelpers.setSubmitting(false)
  }

  return (
    <div>
      <h1>Confirm Email</h1>
      <Formik initialValues={initialValues} onSubmit={handleConfirmEmail} validationSchema={validationSchema}>
        <Form>
          <label htmlFor="code">VerificationCode</label>
          <Input id="code" name="code" placeholder="code" />
          <button type="submit">Submit</button>
          
        </Form>
      </Formik>
    </div>
  )
}



export default EmailVerification
