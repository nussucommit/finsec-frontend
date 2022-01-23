import {Formik ,Form,Field} from 'formik';
import axios from 'axios';
import useRequest from 'api/swr';
import request from 'api/request';


interface MyFormValues {
    UserName: string;
    Password: string;
}

const signUpURL = "/signup";

const UserSignUp = () => {
    const initialValues: MyFormValues = {UserName:'',Password:'' };
    

    return (
    <div>
        <h1 >USER SIGNUP</h1> 
        <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           request.post(signUpURL,{"username":values.UserName,"password":values.Password});
         }}
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