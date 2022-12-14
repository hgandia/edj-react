import { Container, Row, Col } from 'reactstrap';
import ContactForm from '../../components/ContactForm';

const ContactUs = () => {
    return (
        <Container>
            <h1 style={{ color: 'darkblue'}} >Contactenos</h1><hr />
            <Row className='mx-auto'style={{ textAlign:'center'}}>
                <Col sm='12' lg='6'>
                   <h5>Dirrección</h5>
                   <address>
                        53 E. 184 Street<br />
                        Bronx, NY 10468<br />
                        EE.UU.
                   </address>
                </Col>
                <Col>
                    <a role='button' className='btn btn-link' href='tel:+17187339714'><i className='fa fa-phone' /> 1-718-733-9714</a>
                    <br />
                    <a role='button' className='btn btn-link' href='mailto:la1raestrelladejacob@gmail.com'><i className='fa fa-envelope-o' />la1raestrelladejacob@gmail.com</a>
                </Col>
                <hr />
            </Row>
            <Row className='row-content'>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;