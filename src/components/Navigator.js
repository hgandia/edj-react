import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavabarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
    return(
        <Navbar dark sticky='top' expand='md'>
            <Nav className='mx-auto' style={{ fontSize: 20, color: 'darkblue'}} >
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home fa-lg' />Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/caballeros'>
                        <i className='fa fa-list fa-lg' />Caballeros
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/damas'>
                        <i className='fa fa-list fa-lg' />Damas
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/jovenes'>
                        <i className='fa fa-list fa-lg' />Jovenes
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/ninos'>
                        <i className='fa fa-list fa-lg' />Niños
                    </NavLink>
                </NavItem>
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