import { Col, Row, CardImg, CardBody, CardText, Card, CardTitle } from 'reactstrap';
import  OfficialsCarousel from '../../components/OfficialsCarousel';
import DailyBibleVerse from '../../components/DailyBibleVerse';
import BiblePortal from '../../components/BiblePortal';
import { NAVPAGES } from '../shared/NAVPAGES';
import { useParams } from 'react-router-dom';

const LeadersPage = () => {
    
    const { pathname } = useParams();

    const leader = NAVPAGES.find((leader) => {
        const { path } = leader;
    
        const slashPathname = '/'.concat(pathname); 
        
        return slashPathname === path; 
});

    if((leader.path === '/caballeros') || (leader.path === '/damas') || (leader.path === '/jovenes') || (leader.path === '/ninos') || (leader.path === '/escueladominical')) {
        return (
        <>
            <Row className='mx-auto'>
                <Col md='5' sm='12' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <Row className='' alt='group leader' height='500'>
                        <Card style={{ width: 500, border: '10px darkblue double', backgroundColor: 'white' }} className='mx-auto'>
                            <CardTitle className='mx-auto mt-4'>
                                {/* Nothing here */}
                            </CardTitle>
                            <CardImg src={leader.image} alt={leader.leaderTitle} />
                            <CardBody>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className='mt-3 papyrus departmentText'>
                        {leader.leaderName}<br />{leader.leaderTitle}
                    </Row>
                    <Row className='papyrus departmentText'>
                        <hr className='mt-5' style={{ border: 'solid 2px darkblue', width: '60%' }} />
                    </Row>
                    <Row><h2><strong>Directiva</strong></h2></Row>
                    <Row className='mt-3 papyrus departmentText'>
                        {leader.vpName}<br />{leader.vpTitle}
                    </Row>
                    <Row className='mt-5 papyrus departmentText'>
                        {leader.secName}<br />{leader.secTitle}
                    </Row>
                    <Row className='papyrus departmentText'>
                        <hr className='mt-4' style={{ border: 'solid 2px darkblue', width: '60%' }} />
                    </Row>
                </Col>
                <Col sm='12' className='papyrus' style={{ flex: 1, fontSize: '25px', textAlign:'left'}}>
                    <p style={{ 
                                flex: 1,
                                textAlign:'center', 
                                fontSize: '40px', 
                                fontFamily: 'papyrus', 
                                color: 'darkblue', 
                                fontWeight: 'bold',
                            }} className='mt-4'><em>Bienvenidos!</em>
                    </p>
                    {leader.content.split('\n').map((text, key) => {
                        return <p key={key}>{text}</p>;
                    })}
                    <hr />
                    {/* {leader.content2} This is really for the youth section*/}
                    { 
                        leader.path === '/escueladominical' ? 
                        <BiblePortal /> : 
                        ""
                    }
                </Col> 
            </Row>
            <Row className=' mx-auto my-5'>
                <Card style={{ width: 1500, border: '10px white double', backgroundColor: 'darkblue' }} className='mx-auto'>
                    <CardTitle className='mx-auto mt-2' 
                            style = {{
                                 flex: 1, 
                                 fontSize: '25px', 
                                 fontFamily: 'papyrus', 
                                 color: 'white', 
                                 fontWeight: 'bold'
                                }}>
                                    {leader.title}
                    </CardTitle>
                    <CardImg src={leader.groupImage} alt={leader.title} />
                    <CardBody>
                        <CardText>
                            {/* Nothing Here */}
                        </CardText>
                    </CardBody>
                </Card>
            </Row>
        </>
    );
    }
    else if (leader.path === '/aboutus'){
        return(
            <Row className='mx-auto'>
                <Col md='5' style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <Row className='' alt='group leader' height='500'>
                        <Card style={{ width: 800, border: '10px darkblue double', backgroundColor: 'white' }} className='mx-auto'>
                            <CardTitle className='mx-auto mt-4'>
                                {/* {leader.leaderTitle} */}
                            </CardTitle>
                            <CardImg src={leader.image} alt={leader.leaderTitle} />
                            <CardBody>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className='mt-4 bodyFont' >
                        {leader.leaderName}
                    </Row>
                    <Row className='mt-5 mb-5'>
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
                                    <li>Creemos en Jesucristo, su único Hijo, Señor nuestro; </li>
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
                <Col className='bodyFont' style={{ textAlign:'left'}}>
                    <p style={{ 
                                        flex: 1,
                                        textAlign:'center', 
                                        fontSize: '40px', 
                                        fontFamily: 'papyrus', 
                                        color: 'darkblue', 
                                        fontWeight: 'bold'
                                    }}><em><u>Nuestra Historia!</u></em>
                    </p>
                    {leader.content.split('\n').map((text, key) => {
                        return <p key={key}>{text}</p>;
                    })}
                </Col> 
            </Row>
        );
    } else if (leader.path === '/home'){
        return (
            <Row className='mx-auto'>
                <Col md='5'  style={{ flex: 1, justifyContent: 'center', textAlign:'center' }}>
                    <Row>
                        <Card style={{ width: 600, border: '10px darkblue double', backgroundColor: 'white' }} className='mx-auto'>
                            <CardTitle className='mx-auto mt-4'>
                                {/* {leader.leaderTitle} */}
                            </CardTitle>
                            <CardImg src={leader.image} alt={leader.leaderTitle} />
                            <CardBody>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className='mt-3 picTitles' >
                        {leader.leaderName}<br />{leader.leaderTitle}
                    </Row>
                    <Row className='picTitles'>
                        <hr className='mt-5' style={{ justifyContent: 'center', border: 'solid 2px darkblue', width: '60%' }} />
                    </Row>
                    <Row className='picTitles'>
                        <p className='mt-2'>OFICIALES</p>
                        <Col className='mb-5'>
                            <OfficialsCarousel />
                        </Col>
                    </Row>
                </Col>
                <Col sm='12' style={{ flex: 1, justifyContent: 'center', fontSize: '25px', fontFamily: 'papyrus', color: 'darkblue', fontWeight: 'bold' }}>
                    <p  className='bodyFont' style={{ textAlign:'center'}} >
                        <em>Bienvenidos!</em>
                    </p>
                    {leader.content.split('\n').map((text, key) => {
                        return <p key={key}>{text}</p>;
                    })}
                    <DailyBibleVerse />
                </Col> 
            </Row> 
        );
    }  
}

export default LeadersPage;