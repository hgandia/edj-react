import { Col, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { NAVPAGES } from '../shared/NAVPAGES';
import { Link } from 'react-router-dom';

const LeadersPage = () => {
    
    const { leaderId } = useParams();
    console.log('leader ID is: ', leaderId);

    const leader = NAVPAGES.find((leader) => {
    const { id } = leader;
    
    return +leaderId === id; //The + sign does the same thing as the ParseInt function
});

console.log('leader is: ', leader);

    if(leader.id < 5 && leader.id > 0){
        console.log('leader.id is: ', leader.id);
        return (
            <Row>
                <Col md='5' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <img src={leader.image} alt='group leader' height='500' style={{ border: '10px darkblue double' }}/>
                    <Row className='mt-3' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        {leader.leaderName}<br />{leader.leaderTitle}
                    </Row>
                    <Row style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        <hr className='mt-5' style={{ justifyContent: 'center', border: 'solid 2px darkblue', width: '60%' }}/>
                    </Row>
                    <Row><h2><strong>Directiva</strong></h2></Row>
                    <Row className='mt-3' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        {leader.vpName}<br />{leader.vpTitle}
                    </Row>
                    <Row className='mt-5' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        {leader.secName}<br />{leader.secTitle}
                    </Row>
                </Col>
                <Col style={{ flex: 1, justifyContent: 'center', fontSize: '25px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                    {leader.content}
                    <hr />{leader.content2}
                </Col> 
            </Row> 
        );
    }
    else if (leader.id === 5){
        return(
            <Row>
            <Col md='5' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                <img src={leader.image} alt='group leader' height='500' style={{ border: '10px darkblue double' }}/>
                <Row className='mt-3' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                    {leader.leaderName}
                </Row>
                <Row className='mt-5' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                    <Link to='/leader/5/credo'>
                        <h2 style={{ flex: 1, 
                                    justifyContent: 'center', 
                                    fontFamily: 'Papyrus, Times New Roman, Times, serif', 
                                    color: 'white', 
                                    fontWeight: 'bold',
                                    backgroundColor: 'darkblue',
                                    borderRadius: '40px',
                                    padding: '15px',
                                    width: '30%',
                                }} className='mx-auto'
                        >
                                    CREDO
                        </h2>
                    </Link>
                </Row>
            </Col>
            <Col style={{ flex: 1, justifyContent: 'center', fontSize: '25px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                {leader.content}
            </Col> 
        </Row>
        );
    } else if (leader.id === 0){
        return (
            <Row>
                <Col md='5' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <img src={leader.image} alt='group leader' height='500' style={{ border: '10px darkblue double' }}/>
                    <Row className='mt-3' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        {leader.leaderName}<br />{leader.leaderTitle}
                    </Row>
                    <Row style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        <hr className='mt-5' style={{ justifyContent: 'center', border: 'solid 2px darkblue', width: '60%' }}/>
                    </Row>
                    <Row>
                        <p>Oficiales</p>
                    </Row>
                </Col>
                <Col style={{ flex: 1, justifyContent: 'center', fontSize: '25px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                    {leader.content}
                </Col> 
            </Row> 
        );
    }  
}

export default LeadersPage;