import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { validateUserForms } from '../../utils/validateUserForms';
import { userSignup } from './userSlice';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

const UserSignupForm = ({ isOpen, toggleSignupModal, toggle }) => {
   
    const dispatch = useDispatch();

    const handleSignup = (values) => {
        const newUser = {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            password: values.password,
            date: new Date(Date.now()).toISOString()
        };
        console.log('Info from Formik login: ', values);
        dispatch(userSignup(newUser));
        toggleSignupModal();
        toggle();

    }

    return(            
            <Modal isOpen={isOpen} toggle={toggleSignupModal}>
                <ModalHeader toggle={toggleSignupModal}>
                    Signup
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={handleSignup}
                        validate={validateUserForms}
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
                                Someter
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
    );
};

export default UserSignupForm;
