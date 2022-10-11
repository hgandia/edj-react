import churchLogo from '../app/assets/img/churchlogo1.png';
import { Row, Col } from 'reactstrap';
import { NAVPAGES } from '../app/shared/NAVPAGES';


const Header = (props) => {

    if(props.match === null ){
        return null;
    }

    const { leaderId } = props.match.params;
    console.log("leaderId in header is:", leaderId);

    const leader = NAVPAGES.find((leader) => {
            
    const { id } = leader;
        
    return +leaderId === id //The + sign does the same thing as the ParseInt function
    })

    return(
            <Row className='jumbotron mx-auto' style={{ flex: 1, alignItems:'center'}}>
                <Col sm='12' md='4' className='text-center'>
                    <img src={churchLogo} alt='church logo' height='400' width='400' />
                </Col>
                <Col md='8' style={{fontWeight: '', fontFamily: 'papyrus', justifyContent: 'center'}}>
                    <Row style={{ flex: 1, justifyContent: 'center', fontSize: '118px', }}>
                        {leader.title}{leader.title1}<br />{leader.title2}
                    </Row>
                    <Row style={{ flex: 1, justifyContent: 'center', fontSize: '40px'}}>
                        {leader.subTitle}
                    </Row>
                    <Row style={{ flex: 1, justifyContent: 'center', fontSize: '30px' }}>
                        {leader.verse}
                    </Row>
                </Col>   
            </Row>
    )
}
export default Header;