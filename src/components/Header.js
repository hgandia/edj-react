import UserLoginForm from '../features/users/UserLoginForm';
import churchLogo from '../app/assets/img/churchlogo1.png';
import { NAVPAGES } from '../app/shared/NAVPAGES';
import { Row, Col, Button } from 'reactstrap';
import { useState } from 'react';

const Header = (props) => {

    const [loginModalOpen, setLoginModalOpen] = useState(false);

    if(props.match === null ){
        return null;
    }

    const { pathname } = props.match.params;
    
    const leader = NAVPAGES.find((leader) => {
            
        const { path } = leader;

        const slashPathname = '/'.concat(pathname);

        return slashPathname === path;
        
        // return +leaderId === id;
        //The + sign does the same thing as the ParseInt function.
        //This was used when I destructred leaderId from props.match.params when using the id of the leader. 
    });

    const toggleUserLoginModal = () => {
        setLoginModalOpen(!loginModalOpen);
    };

    return(
        <>
            <Row className='jumbotron mx-auto' style={{ flex: 1, alignItems:'center'}}>
                <Col sm='12' lg='4' className='text-center'>
                    <Button onClick={toggleUserLoginModal} color='link'>
                        <img src={churchLogo} alt='church logo' height='400' width='400' />
                    </Button>
                </Col>
                <Col sm='12' lg='8' style={{  flex: 1, fontFamily: 'papyrus', justifyContent: 'center' }}>
                    <Row lg='8' className='header' style={{ fontSize: '73px' }}>
                        {leader.title}
                    </Row>
                    <Row lg='8' className='header' style={{ fontSize: '78px' }}>
                        {leader.title1}
                    </Row>
                    <Row className='header' lg='8' style={{ fontSize: '78px' }}>
                        {leader.title2}
                    </Row>
                    <Row lg='8' className='header' style={{ fontSize: '40px' }}>
                            {leader.subTitle}
                    </Row>
                    <Row lg='8' className='header' style={{ fontSize: '30px' }}>
                            {leader.verse}
                    </Row>
                </Col>   
            </Row>
            <UserLoginForm isOpen={loginModalOpen} toggle={toggleUserLoginModal}/>
        </>
    )
}
export default Header;