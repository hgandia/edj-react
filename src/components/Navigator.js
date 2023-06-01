import { isAuthenticated, userLogout, validateLogin } from '../features/users/userSlice';
import { Navbar, Collapse, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import UserAvatar from '../features/users/UserAvatar';
import { NAVPAGES } from '../app/shared/NAVPAGES';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import churchLogo from '../app/assets/img/churchlogo2.jpg'

const Navigator = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const auth = useSelector(isAuthenticated);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(validateLogin());
    }, [dispatch]);
console.log('auth is: ', auth);
    const userOptions = auth ? (
        <>
            <UserAvatar />
            <span className='navbar-text ml-auto'>
                <Button 
                    outline
                    onClick={() => dispatch(userLogout())}
                    style={{
                        color: '#00008B',
                        border: '1px solid darkblue',
                         marginLeft: '10px'
                    }}    
                >
                    <i className='fa fa-sign-out fa-lg' />Logout
                </Button>
            </span>
        </>

    ) : (
        //Here I can display a login button, instead of using the church logo as a secret login.
        <span>
            <img src={churchLogo} alt='church logo' height='32px' width='32px'/>
        </span>
    ); 

    return(   
        <Navbar dark sticky='top' expand='lg'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='navbar' />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='mx-auto' style={{ fontSize: 20 }}>
                    {
                        NAVPAGES.map((page, idx) => ( 
                        <NavItem key={idx}>
                            <NavLink className='nav-link' to={`${page.path}`} style={{ color: 'darkblue'}}>
                                <i className={`fa ${page.icon ? page.icon : 'fa-users'} fa-lg`} />{page.navTitle}
                            </NavLink>
                        </NavItem>))
                    }
                </Nav>
                {userOptions}
            </Collapse>
        </Navbar>
    );
}
export default Navigator;