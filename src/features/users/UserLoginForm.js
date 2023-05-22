import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { validateUserLoginForm } from '../../utils/validateUserLoginForm';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import userIcon from '../../app/assets/img/userIcon.jpg';
import { useSelector, useDispatch } from 'react-redux';

const UserLoginForm = ({ isOpen, toggle }) => {
   
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: userIcon,
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            password: values.password
        };
        console.log('Info from Formik login: ', values);
        dispatch(setCurrentUser(currentUser));
        toggle();

    }

    return(            
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={handleLogin}
                        validate={validateUserLoginForm}
                    >
                        <Form>
                        <FormGroup>
                                <Label htmlFor='firstName'>
                                    First Name
                                </Label>
                                <Field 
                                    id='firstName'
                                    name='firstName'
                                    placeholder='Nombre'
                                    className='form-control'
                                />
                                <ErrorMessage name='firstName'>
                                    {msg => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='lastName'>
                                    Last Name
                                </Label>
                                <Field 
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Apellido'
                                    className='form-control'
                                />
                                <ErrorMessage name='lastName'>
                                    {msg => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='username'>
                                    Username
                                </Label>
                                <Field 
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                                <ErrorMessage name='username'>
                                    {msg => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>
                                    Password
                                </Label>
                                <Field 
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                                <ErrorMessage name='password'>
                                    {msg => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Login
                            </Button>{' '}
                            <Button type='submit' color='primary'>
                                Sign-Up
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
    );
};

export default UserLoginForm;
