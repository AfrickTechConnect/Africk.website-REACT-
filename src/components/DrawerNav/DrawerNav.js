import React from 'react';
import styled from 'styled-components';
import { MdCancel }  from 'react-icons/md';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`

    display:none;
    @keyframes grow {
        0% { width: 190px }
        50% { width: 220px }
        75% { width: 240px }
        100% { width: 265px }
    }
    @media screen and (max-width: 760px){
        display:block;
        height: 100%;
        position: fixed;
        z-index: 100;
        background: #FDFDFD;
        top: 0;
        right: 0;
        animation-name: grow;
        animation-duration: .1s;
        width: 265px;
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.8);
        z-index: 200;
    }
    
    
`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 200px 10px 20px 30px;
`
const CancelIcon = styled.div`
    position: fixed;
    top: 12px;
    right: 10px;
`

const ListItem = styled.li`
    padding: 5px 0px 2px 5px;
    font-size:30px;
    font-weight: normal;
    display: block;
`

function DrawerNav({closeDrawer}) {
    return (
        <>
            
            <Wrapper>
                <CancelIcon onClick={closeDrawer}> <MdCancel className="w-10 h-10"/></CancelIcon>
                <Links>
                    <ListItem onClick={closeDrawer}>
                        <Link to='/'>Home</Link>
                    </ListItem>
                    <ListItem onClick={closeDrawer}>
                        <a href="https://medium.com/@africk.connect" target="_blank" rel="noreferrer">our blog</a>
                    </ListItem>
                    {/* <ListItem>
                        products
                    </ListItem> */}
                    <ListItem onClick={closeDrawer}>
                        <Link to='/contact'>contact us</Link>
                    </ListItem>
                </Links>
            </Wrapper>
        </>
        
    );
}

export default DrawerNav;