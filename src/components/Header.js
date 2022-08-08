import churchLogo from '../app/assets/img/churchlogo1.png';
import HEADERDETAILS from '../app/shared/HEADERDETAILS';
import { Container, Col, Row } from 'reactstrap';

const Header = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <img src={churchLogo} alt='church logo' />
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
