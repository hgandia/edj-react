import { NAVPAGES } from '../app/shared/NAVPAGES';
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Navigator = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(   
        <Navbar dark sticky='top' expand='lg'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='navbar'/>
            <Collapse isOpen={menuOpen} navbar>
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
            </Collapse>
        </Navbar>
    );
}
export default Navigator;