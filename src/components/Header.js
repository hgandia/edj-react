import churchLogo from '../app/assets/img/churchlogo1.png';
import { Row, Col } from 'reactstrap';


const Header = () => {
    return(
            <Row className='row-content jumbotron'>
                <Col sm='12' md='4' className='text-center'>
                    <img src={churchLogo} alt='church logo' height='300' width='300' />
                </Col>
                <Col md='8' className='align-self-center text-center'>
                    <h1 className='mx-auto'>Estrella de Jacob</h1>
                </Col>   
            </Row>
    );
}

export default Header;
