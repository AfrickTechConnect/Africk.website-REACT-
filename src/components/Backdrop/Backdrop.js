import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:none;

    @media screen and (max-width: 760px){
        display:block;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        padding: 1000px;
    }
`

function Backdrop() {
    return (
        <Wrapper>
            
        </Wrapper>
    );
}

export default Backdrop;