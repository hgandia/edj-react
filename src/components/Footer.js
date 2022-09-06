import { Row, Col } from 'reactstrap';


const Footer = () => {
    return (
            <Row className='site-footer row-content'>
                <Col>
                    <p className='papyrus'>Iglesia Pentecostal Estrlla de Jacob, Inc</p>
                    <p className='papyrus'>53 East 184th Street</p>
                    <p className='papyrus'>Bronx, New York 10468</p>
                </Col>              
                <Col className='text-center'>
                    <a className='btn btn-link btn-lg' href='mailto:la1raestrelladejabcob@gmail.com' id='footerIcon'><i className='fa fa-envelope-o align-self-center' /></a>
                    <a className='btn btn-link' href='mailto:la1raestrelladejabcob@gmail.com' id='contact'>Contactenos por E-mail</a><br /><br />
                    <a className='btn btn-link btn-lg' href='tel:1+718-733-9714' id='footerIcon'><i className='fa fa-phone align-self-center' /></a>
                    <a className='btn btn-link' href='tel:1+718-733-9714' id='contact'>Contactenos por Telefono</a><br />
                </Col>
                <Col>
                    <p className='papyrus' id='follow'>
                        <h4>Siganos por:</h4><br />
                        <a className='btn btn-social-icon btn-facebook btn-lg mx-4' target='_blank' href='https://www.facebook.com/estrelladjacob'><i class='fa fa-facebook-official' /></a>   
                        <a className='btn btn-social-icon btn-google btn-lg' target='_blank' href='https://www.youtube.com/c/PrimeraEstrellaDeJacob/featured'><i class='fa fa-youtube-play' /></a>
                    </p>
                </Col>
            </Row>
    );
}

export default Footer;