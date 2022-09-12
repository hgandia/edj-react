import { useState } from 'react';
import { CHURCHLEADERS } from '../app/shared/CHURCHLEADERS';
import { Navbar, NavbarBrand, Collapse, NavabarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
    return(
        <Navbar dark sticky='top' expand='md'>
            <Nav className='mx-auto' style={{ fontSize: 20, color: 'darkblue'}} >
                {
                    CHURCHLEADERS.map((leader) => ( <NavItem>
                        <NavLink className='nav-link' to={`/leader/${leader.id}`}>
                            <i className={`fa ${leader.icon ? leader.icon : 'fa-list'} fa-lg`} />{leader.title}
                        </NavLink>
                    </NavItem>))
                }
                <NavItem>
                    <NavLink className='nav-link' to='/events'>
                        <i className='fa fa-bolt fa-lg' />Eventos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/calendar'>
                        <i className='fa fa-calendar fa-lg' />Calendario
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='aboutus/'>
                        <i className='fa fa-info fa-lg' />De Nosotros
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contactus'>
                        <i className='fa fa-address-card fa-lg' />Contactenos
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
export default Navigator;