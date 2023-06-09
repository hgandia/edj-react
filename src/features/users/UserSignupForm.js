import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button } from 'reactstrap';
import { validateUserSignupForm } from '../../utils/validateUserSignupForm';
import { userSignup } from './userSlice';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

const UserSignupForm = ({ isSignupOpen, toggleSignupModal, toggle }) => {
   
    const dispatch = useDispatch();

    const handleSignup = (values) => {
        const newUser = {
            firstname: values.firstname,
            lastname: values.lastname,
            username: values.username,
            password: values.password,
            date: new Date(Date.now()).toISOString()
        };
    
        dispatch(userSignup(newUser));
        toggleSignupModal();
        toggle();

    }

    return(            
            <Modal isOpen={isSignupOpen} toggle={toggleSignupModal}>
                <ModalHeader toggle={toggleSignupModal}>
                    Signup
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{username: '', password: ''}}
                        onSubmit={handleSignup}
                        validate={validateUserSignupForm}
                    >
                        <Form>
                        <FormGroup>
                                <Label htmlFor='firstname'>
                                    First Name
                                </Label>
                                <Field 
                                    id='firstname'
                                    name='firstname'
                                    placeholder='Nombre'
                                    className='form-control'
                                />
                                <ErrorMessage name='firstname'>
                                    {msg => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='lastname'>
                                    Last Name
                                </Label>
                                <Field 
                                    id='lastname'
                                    name='lastname'
                                    placeholder='Apellido'
                                    className='form-control'
                                />
                                <ErrorMessage name='lastname'>
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
