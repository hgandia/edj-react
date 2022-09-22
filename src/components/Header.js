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
        <Row className='row-content jumbotron'>
            <Col sm='12' md='4' className='text-center'>
                <img src={churchLogo} alt='church logo' height='300' width='300' />
            </Col>
            <Col md='8' className='align-self-center text-center'>
                <Row>
                    {leader.title}
                </Row>
                <Row>
                    {leader.subTitle}
                </Row>
                <Row>
                    {leader.verse}
                </Row>
            </Col>   
        </Row>
    )
}
export default Header;