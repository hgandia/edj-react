import churchLogo from '../app/assets/img/churchlogo1.png';
import { Row, Col } from 'reactstrap';
import { NAVPAGES } from '../app/shared/NAVPAGES';


const Header = (props) => {

    if(props.match === null ){
        return null;
    }

    const { pathname } = props.match.params;
    
    const leader = NAVPAGES.find((leader) => {
            
        const { path } = leader;

        const slashPathname = '/'.concat(pathname);
       // return +leaderId === id; //The + sign does the same thing as the ParseInt function
        return slashPathname === path;
        
    });

    return(
            <Row className='jumbotron mx-auto' style={{ flex: 1, alignItems:'center'}}>
                <Col sm='12' lg='4' className='text-center'>
                    <img src={churchLogo} alt='church logo' height='400' width='400' />
                </Col>
                <Col sm='12' lg='8' style={{  flex: 1, fontFamily: 'papyrus', justifyContent: 'center' }}>
                    <Row lg='8' style={{ flex: 1, justifyContent: 'center', fontSize: '73px', textAlign: 'center' }}>
                        {leader.title}
                    </Row>
                    <Row lg='8' style={{ flex: 1, justifyContent: 'center', fontSize: '78px', textAlign: 'center' }}>
                        {leader.title1}
                    </Row>
                    <Row lg='8' style={{ flex: 1, justifyContent: 'center', fontSize: '78px', textAlign: 'center' }}>
                        {leader.title2}
                    </Row>
                    <Row lg='8' style={{ flex: 1, justifyContent: 'center', fontSize: '40px', textAlign: 'center' }}>
                            {leader.subTitle}
                    </Row>
                    <Row lg='8' style={{ flex: 1, justifyContent: 'center', fontSize: '30px', textAlign: 'center' }}>
                            {leader.verse}
                    </Row>
                </Col>   
            </Row>
    )
}
export default Header;