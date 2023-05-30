import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NAVPAGES } from '../app/shared/NAVPAGES';
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Navigator = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(   
        <Navbar dark sticky='top' expand='lg'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='navbar' />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='mx-auto' style={{ fontSize: 20 }}>
                    {
                        NAVPAGES.map((page) => ( 
                        <NavItem>
                            <NavLink className='nav-link' to={`${page.path}`} style={{ color: 'darkblue'}}>
                                <i className={`fa ${page.icon ? page.icon : 'fa-users'} fa-lg`} />{page.navTitle}
                            </NavLink>
                        </NavItem>))
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
}
export default Navigator;