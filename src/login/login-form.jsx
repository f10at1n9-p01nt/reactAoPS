import { Formik, Field, Form, ErrorMessage } from 'formik';
import Logo from '../images/AopS_Online_Logos_AOPS Online Cube.png';

const LoginForm = () => {
    return (
        <div>
            <img src={Logo} alt="AoPS Online Logo" />
            <h1>Instructor Scheduling</h1>
            <Formik>
                <Form>
                    <label htmlFor='username' />
                    <Field id='username' name='username' placeholder='username' />
                </Form>
            </Formik>
            <button>Enter Site</button>
        </div>
    );
}

export default LoginForm;