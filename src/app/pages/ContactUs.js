import { Container, Row, Col } from 'reactstrap';
import ContactForm from '../../components/ContactForm';

const ContactUs = () => {
    return (
        <Container>
            <h1>Contactenos</h1><hr />
            <Row>
                <Col>
                   <h5>Dirrección</h5>
                   <address>
                        53 E. 184 Street<br />
                        Bronx, NY 10468<br />
                        EE.UU.
                   </address>
                </Col>
                <Col>
                    <a role='button' className='btn btn-link' href='tel:+12065551234'><i className='fa fa-phone' /> 1-718-733-9714</a>
                    <br />
                    <a role='button' className='btn btn-link' href='mailto:fakeemail@fakeemail.co'><i className='fa fa-envelope-o' />la1raestrelladejabcob@gmail.com</a>
                </Col>
                <hr />
            </Row>
            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Respondanos</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;