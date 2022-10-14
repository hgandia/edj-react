import { Row, Col, } from 'reactstrap';
import DisplayFlyers from '../../components/DisplayFlyers';

const Events = () => {
    return (
           <Row className='mx-auto'>
                <Col>
                    <DisplayFlyers />
                </Col>
           </Row>
    );
}

export default Events;