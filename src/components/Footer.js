import { Row, Col } from 'reactstrap';


const Footer = () => {
    return (
            <Row className='site-footer row-content mx-auto mt-5'>
                <Col className='text-center' style={{ alignSelf:'center', fontSize: '20px' }}>
                    <p className='papyrus'>Iglesia Pentecostal Estrlla de Jacob, Inc</p>
                    <p className='papyrus'>53 East 184th Street</p>
                    <p className='papyrus'>Bronx, New York 10468</p>
                </Col>              
                <Col className='text-center'>
                    <h3 className='papyrus' id='footerIcon'>Contactenos:</h3>
                    <a className='btn btn-link btn-lg' href='mailto:la1raestrelladejabcob@gmail.com' id='footerIcon'><i className='fa fa-envelope-o align-self-center' /></a>
                    <a className='btn btn-link' href='mailto:la1raestrelladejabcob@gmail.com' id='contact'>EMail</a><br /><br />
                    <a className='btn btn-link btn-lg' href='tel:1+718-733-9714' id='footerIcon'><i className='fa fa-phone align-self-center' /></a>
                    <a className='btn btn-link' href='tel:1+718-733-9714' id='contact'>Telefono</a><br />
                </Col>
                <Col className='text-center'>
                    <h4 className='papyrus'>Siganos por:</h4><br />
                    <a className='btn btn-social-icon btn-facebook btn-lg mx-4' target='blank' href='https://www.facebook.com/estrelladjacob'><i class='fa fa-facebook-official' /></a>   
                    <a className='btn btn-social-icon btn-google btn-lg' target='blank' href='https://www.youtube.com/c/PrimeraEstrellaDeJacob/featured'><i class='fa fa-youtube-play' /></a>
                </Col>
            </Row>
    );
}

export default Footer;