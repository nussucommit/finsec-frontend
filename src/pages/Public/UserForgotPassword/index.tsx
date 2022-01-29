import { Formik ,Form,Field} from 'formik';

import request from 'api/request';



interface MyFormValues {
    email: string;
    
}


const UserForgotPassword = () => {
    const loginURL = "";
    const initialValues: MyFormValues = {email:'' };

    return (
    <div>
        <h1 >Forgot Password</h1> 
        <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           request.post(loginURL,{"email":values.email});
         }}
         >
         <Form>
           <label htmlFor="email">UserName</label>
           <Field id="email" name="UserName" placeholder="email" />
           <button type="submit">Submit</button>
         </Form>
       </Formik>       
    </div>
    )
}

export default UserForgotPassword;