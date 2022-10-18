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

    if(leader.id > 0 && leader.id < 5 ) {
        console.log('leader.id is: ', leader.id);
        return (
            <>
            <Row className='mx-auto'>
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
                <Col style={{ flex: 1, fontSize: '25px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold' }}>
                    <p style={{ 
                                flex: 1,
                                textAlign:'center', 
                                fontSize: '40px', 
                                fontFamily: 'papyrus', 
                                color: 'darkblue', 
                                fontWeight: 'bold'
                            }}><em>Bienvenidos!</em></p>
                    {leader.content.split('\n').map((t, key) => {
                        return <p key={key}>{t}</p>;
                    })}
                    <hr />
                    {/* {leader.content2} */}
                </Col> 
            </Row>
            <Row className='mx-auto my-5'>
                <Col className='mt-5' style={{ textAlign: 'center' }}>
                    <img src={leader.groupImage} alt='Group Pic' height='900' style={{ border: '10px darkblue double' }} />
                </Col>
            </Row>
            </>
        );
    }
    else if (leader.id === 5){
        return(
            <Row className='mx-auto'>
                <Col md='5' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <img src={leader.image} alt='group leader' height='500' style={{ border: '10px darkblue double' }}/>
                    <Row className='mt-3' style={{ flex: 1, justifyContent: 'center', fontSize: '20px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                        {leader.leaderName}
                    </Row>
                    <Row className='mt-5'>
                        <Col md='8' className='mx-auto'>
                            <h2 style={{ flex: 1, 
                                        fontFamily: 'Papyrus, Times New Roman, Times, serif', 
                                        color: 'white', 
                                        fontWeight: 'bold',
                                        backgroundColor: 'darkblue',
                                        borderRadius: '40px',
                                        padding: '15px',
                                        border:'double'
                                        }} 
                                        className='mx-auto mt-5'
                            >
                                        CREDO
                                        <hr />
                                <ul style={{ fontSize: '25px', textAlign: 'justify', fontWeight: 'normal'}}>
                                    <li>Creemos en Dios Padre Todopoderoso, creador del cielo y de la tierra.</li>
                                    <li>Creemos en Jesucrito, su único Hijo, Señor nuestro; </li>
                                    <li>Que Jesucristo fue concebido del Espíritu Santo,</li>
                                    <li>Que nació de la virgen María,</li>
                                    <li>Que padecio bajo el poder de Poncio Pilatos,</li>
                                    <li>Fue Crucificado, muerto y sepultado,</li>
                                    <li>Descendió a los ínfiernos,</li>
                                    <li>Al tercer día resucito de entre los muertos,</li>
                                    <li>Subio al cielo, y esta sentado a la diestra de Dios Padre Todopoderoso;</li>
                                    <li>Desde allí vendrá a los muertos.</li>
                                    <li>Creemos en el Espíritu Santo, la Santa Iglesia Universal, la comunión de los santos,</li>
                                    <li>El perdon de pecados,</li>
                                    <li>La resurrección de los muertos, y</li>
                                    <li>La vida eterna!</li>
                                </ul>
                            </h2>
                        </Col>
                    </Row>
                </Col>
                <Col style={{ flex: 1, justifyContent: 'center', fontSize: '25px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold'}}>
                    <p style={{ 
                                        flex: 1,
                                        textAlign:'center', 
                                        fontSize: '40px', 
                                        fontFamily: 'papyrus', 
                                        color: 'darkblue', 
                                        fontWeight: 'bold'
                                    }}><em>Nuestra Historia!</em>
                    </p>
                    {leader.content.split('\n').map((t, key) => {
                        return <p key={key}>{t}</p>;
                    })}
                </Col> 
            </Row>
        );
    } else if (leader.id === 0){
        return (
            <Row className='mx-auto'>
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
                <p style={{ 
                                flex: 1,
                                textAlign:'center', 
                                fontSize: '40px', 
                                fontFamily: 'papyrus', 
                                color: 'darkblue', 
                                fontWeight: 'bold'
                            }}><em>Bienvenidos!</em></p>
                    {leader.content.split('\n').map((t, key) => {
                        return <p key={key}>{t}</p>;
                    })}
                </Col> 
            </Row> 
        );
    }  
}

export default LeadersPage;