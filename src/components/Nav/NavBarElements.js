import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: linear-gradient(90deg, #C2B7EE, #EADEEC);
    height: 80px;
    display: flex;
    font-weight: 800;
    font-size: 20px;
    justify-content: space-between;
    padding: 10px 80px  0px 25px;
    z-index: 10;

    @media  (max-width: 760px) {
        padding: 10px 10px 0px 0px;
    }
`

export const NavLink = styled.a`
    color: #261D56;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }
    &.hover {
        text-decoration: underline;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #261D56;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2px;

    @media screen and (max-width: 760px){
        display: none
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 760px){
        display: none
    }
`

export const DrawNav = styled.div`


`
