import { FLYERS }  from '../app/shared/FLYERS';
import AnimatedFlyerCard from './AnimatedFlyerCard';
import { Row, Col } from 'reactstrap';

const DisplayFlyers = () => {
   
  return(
        <Row className='mx-auto' width='200' height='200'>
           {FLYERS.map((item, idx) => {
                console.log('idx: ', idx);
                return(
                    <Col key={idx} md='4' sm='6' className='my-4' >
                        <AnimatedFlyerCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
}
export default DisplayFlyers;