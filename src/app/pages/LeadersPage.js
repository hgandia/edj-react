 import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { CHURCHLEADERS } from '../shared/CHURCHLEADERS';

const LeadersPage = () => {
    const { leaderId } = useParams();
    console.log('leader ID is: ', leaderId);

const leader = CHURCHLEADERS.find((leader) => {
    const { id } = leader;
    
    return +leaderId === id; //The + sign does the same thing as the ParseInt function
} )

console.log('leader is: ', leader);
    return (
        <Row>
            <Col>
                <img src={leader.image} />
            </Col>
            <Col>
                {leader.content}
            </Col>
        </Row> 
    );
}

export default LeadersPage;