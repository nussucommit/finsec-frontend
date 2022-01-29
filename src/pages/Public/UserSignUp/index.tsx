import {Formik ,Form,Field} from 'formik';
import * as yup from 'yup'

import request from 'api/request';

   interface Values {
    UserName: string;
    Password: string;
}

const signUpURL = "/signup";

const UserSignUp = () => {
    const initialValues: Values = {UserName:'',Password:'' };
    const validationSchema: yup.SchemaOf<Values> = yup.object({
      UserName: yup.string().required('Required'),
      Password: yup.string().required('Required'),
    })
    

    return (
      <div>
        <h1>USER SIGNUP</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            request.post(signUpURL, { username: values.UserName, password: values.Password })
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <label htmlFor="UserName">UserName</label>
            <Field id="UserName" name="UserName" placeholder="UserName" />
            <label htmlFor="Password">Password</label>
            <Field id="Password" name="Password" placeholder="Password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    )
    

}

export default UserSignUp