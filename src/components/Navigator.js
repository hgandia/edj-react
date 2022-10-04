import { NAVPAGES } from '../app/shared/NAVPAGES';
import { Navbar, /*NavbarBrand, Collapse, NavabarToggler,*/ Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
    return(
        <Navbar dark sticky='top' expand='md'>
            <Nav className='mx-auto' style={{ fontSize: 20 }} >
                {
                    NAVPAGES.map((leader) => ( 
                    <NavItem>
                        <NavLink className='nav-link' to={`/leader/${leader.id}`} style={{ color: 'darkblue'}}>
                            <i className={`fa ${leader.icon ? leader.icon : 'fa-users'} fa-lg`} />{leader.navTitle}
                        </NavLink>
                    </NavItem>))
                }
            </Nav>
        </Navbar>
    );
}
export default Navigator;