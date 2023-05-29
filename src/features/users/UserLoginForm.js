import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { validateUserForms } from '../../utils/validateUserForms';
import { userLogin } from './userSlice';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import UserSignupForm from './UserSignupForm';
import { useState } from 'react';

const UserLoginForm = ({ isOpen, toggle }) => {
    const { loginModalOpen } = isOpen;
    const { toggleUserLoginModal } = toggle;
    
    const [signupModalOpen, setSignupModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const currentUser = {
            username: values.username,
            password: values.password
        };
        dispatch(userLogin(currentUser));
        toggle(toggleUserLoginModal);

    };

    const toggleSignupModal = () => {
        setSignupModalOpen(!signupModalOpen);
    };

    return(
        <>            
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={handleLogin}
                        validate={validateUserForms}
                    >
                        <Form>
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
                            <Button onClick={toggleSignupModal} color='warning'>
                                Sign-Up
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
            <UserSignupForm isSignupOpen={signupModalOpen} toggleSignupModal={toggleSignupModal} toggle={toggle}/>
        </>
    );
};

export default UserLoginForm;
