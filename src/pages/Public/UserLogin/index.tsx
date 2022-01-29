import { Formik ,Form,Field} from 'formik';
import {Link} from 'react-router-dom'
import styles from './UserLogin.module.css';
import request from 'api/request';
import useAuth from 'hooks/useAuth';



interface MyFormValues {
    UserName: string;
    Password: string;
    
}
const UserLogin = () => {
    const loginURL = "";
    const initialValues: MyFormValues = {UserName:'',Password:'' };
    const updateToken = useAuth(state => state.userLogin);

    return (
    <div>
        <h1 className={styles.test}>USER LOGIN</h1> 
        <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           request.post(loginURL,{"username":values.UserName,"password":values.Password}).then((response) => updateToken({"refresh":response.data.refresh,"access":response.data.access}));
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
       <Link to="/signup"><button>SignUp</button></Link>
       <Link to="/forgetpassword"><button>Forgotten Password?</button></Link>
       
    </div>
    )
    

}

export default UserLogin