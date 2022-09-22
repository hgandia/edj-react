import { FLYERS }  from '../app/shared/FLYERS';
import AnimatedFlyerCard from './AnimatedFlyerCard';
import { Row, Col } from 'reactstrap';

const DisplayFlyers = () => {
   
    return(
        <Row>
            {FLYERS.map((item, idx) => {
              //  const { id }  = item;

                return(
                    <Col key={idx} >
                        <AnimatedFlyerCard item={item} />
                    </Col>
                )

            })}
        </Row>
    );
    
}
export default DisplayFlyers;