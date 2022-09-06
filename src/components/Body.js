import { CHURCHLEADERS } from '../app/shared/CHURCHLEADERS';
import { Row, Col } from 'reactstrap';

const Body = () => {
    const { image, content } = CHURCHLEADERS;
    
    

    return(
            <Row>
                <Col>
                    {image}
                </Col>
                <Col>
                    {content}
                </Col>
            </Row>
    );
}
export default Body;