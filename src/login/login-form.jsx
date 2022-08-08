import { Formik, Field, Form } from 'formik';
import Logo from '../images/AopS_Online_Logos_AOPS Online Cube.png';
import style from '../styles/login.module.scss';

const LoginForm = () => {
    return (
        <div className={style.container}>
            <img src={Logo} alt="AoPS Online Logo" className={style.logo} />
            <h1>Instructor Scheduling</h1>
            <Formik>
                <Form className={style.form}>
                    <label htmlFor='username' />
                    <Field
                        id='username'
                        name='username'
                        placeholder='username'
                        className={style.username} />
                    <button>Enter Site</button>
                </Form>
            </Formik>
        </div>
    );
}

export default LoginForm;