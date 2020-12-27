import React from 'react';
import {
 Nav,
 NavLink,
 Bars, 
 NavMenu,

} from './NavBarElements';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_2.png'
import styled from 'styled-components';

const IMG = styled.img`
    object-fit: cover;
`

function NavBar({ openCloseDrawer }) {
    return (
        <>
            <Nav>
                <NavLink href="/" className="mr-40">
                    <IMG src={Logo} className="p-0 h-80 " alt="Africk Connect Logo" />
                </NavLink>
                <Bars onClick={openCloseDrawer}/>
                <NavMenu>
                <NavLink>
                   <Link to='/'>Home</Link>
                </NavLink>
                <NavLink href="https://medium.com/@africk.connect" target='_blank'>
                    our blog
                </NavLink>
                {/* <NavLink href="/about">
                    products
                </NavLink> */}
                <NavLink>              
                    <Link to='/contact'>contact us</Link>
                </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default NavBar;