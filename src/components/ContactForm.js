import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Label, Col, FormGroup } from "reactstrap";
import { validateContactForm } from "../utils/validateContactForm";

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form vlues', values);
        console.log('in JSON format: ', JSON.stringify(values));
        resetForm();
    }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        agree: false,
        contactType: "By Phone",
        feedback: '',
      }}
      validate={validateContactForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormGroup row>
          <Label htmlFor='firstName' md='2'>
            Nombre
          </Label>
          <Col md='10'>
            <Field
                name='firstName' 
                placeholder='Nombre'
                className='form-control'
            />
            <ErrorMessage name='firstName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='lastName' md='2'>
            Apellido
          </Label>
          <Col md='10'>
            <Field
                    name='lastName'
                    placeholder='Apellido' 
                    className='form-control'
            />
            <ErrorMessage name='lastName'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='phoneNum' md='2' >
            Telefono
          </Label>
          <Col md='10'>
            <Field
                    name='phoneNum'
                    placeholder='Telefono' 
                    className='form-control'
            />
            <ErrorMessage name='phoneNum'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            E-mail
          </Label>
          <Col md='10'>
            <Field
                    name='email'
                    placeholder='E-mail'
                    type='email' 
                    className='form-control'
            />
            <ErrorMessage name='email'>
                {(msg) => <p className='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label check md={{ size: 2, offset: 2 }}>
            <Field 
                name='agree'
                type='checkbox'
                className='form-check-input'
            />{' '}
            Contacteme Por:
          </Label>
          <Col md='2'>
          <Field
                name='contactType'
                as='select' 
                className='form-control'
            >
                <option>Telefono</option>
                <option>E-Mail</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
            <Label htmlFor='feedback' md='2'>
                Su Pedido
            </Label>
            <Col md='10'>
            <Field
                name='feedback'
                as='textarea'
                rows='15' 
                className='form-control'
            />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
                <Button type='submit' color='primary'>
                    Someter
                </Button>
            </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};
export default ContactForm;
