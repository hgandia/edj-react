import { CHURCHLEADERS } from '../app/shared/CHURCHLEADERS';
import { Row, Col } from 'reactstrap';

const Body = () => {
    
    CHURCHLEADERS.map(leader => {
        const { image, content } = leader;
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
    });
}
export default Body;