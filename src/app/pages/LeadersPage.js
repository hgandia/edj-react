import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { NAVPAGES } from '../shared/NAVPAGES';

const LeadersPage = () => {
    
    const { leaderId } = useParams();
    console.log('leader ID is: ', leaderId);

    const leader = NAVPAGES.find((leader) => {
    const { id } = leader;
    
    return +leaderId === id; //The + sign does the same thing as the ParseInt function
});

console.log('leader is: ', leader);

    if(leader.id < 6){
        console.log('leader.id is: ', leader.id);
        return (
            <Row>
                <Col md='5' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <img src={leader.image} alt='group leader' height='600' style={{ border: '10px darkblue double' }}/>
                </Col>
                <Col style={{ flex: 1, justifyContent: 'center', fontSize: '30px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                    {leader.content}
                    <hr />{leader.content2}
                </Col> 
            </Row> 
        );
    }
    else{
        return(
        <>
            <div>{leader.id}</div>
            <div>{leader.path}</div>
        </>
        );
    }
    
}

export default LeadersPage;