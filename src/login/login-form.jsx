import { Formik, Field, Form } from 'formik';
import Logo from '../images/AopS_Online_Logos_AOPS Online Cube.png';
import style from '../styles/login.module.scss';

const LoginForm = () => {
    return (
        <div className={style.container}>
            <div className={style.row}>
                <img src={Logo} alt="AoPS Online Logo" className={style.logo} />
            </div>
            <div className={style.row}>
                <h1>Instructor Scheduling</h1>
            </div>
            <div className={style.row}>
                <Formik>
                    <Form className={style.form}>
                        <div className={style.column}>
                            <label htmlFor='username' />
                            <Field
                                id='username'
                                name='username'
                                placeholder='username'
                                className={style.username} />
                        </div>
                        <div className={style.column}>
                            <button>Enter Site</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default LoginForm;