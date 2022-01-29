import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as yup from 'yup'

import { signup } from "api/auth";
import history from 'utils/history'

import { Input } from 'components/Form'


interface Values {
  UserName: string
  Password: string
}

const UserSignUp = () => {
  const initialValues: Values = { UserName: '', Password: '' }

  const validationSchema: yup.SchemaOf<Values> = yup.object({
    UserName: yup.string().required('Required'),
    Password: yup.string().required('Required'),
  })

  const handleSignup = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    console.log({ values, formikHelpers })
    signup({username: values.UserName,password: values.Password});
    formikHelpers.setSubmitting(false)
    history.push('/login')
  }

  return (
    <div>
      <h1>USER SIGNUP</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSignup}
        validationSchema={validationSchema}
      >
        <Form>
          <Input id="UserName" name="UserName"  placeholder="UserName" />
          <Input id="Password" name="Password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserSignUp
