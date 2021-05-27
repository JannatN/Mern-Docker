import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import { Link } from 'react-router-dom'


const Nav = styled.nav.attrs({
    className: `nav`,
})`

`
const Container = styled.div.attrs({
    className: 'container',
})`  
    display: flex;
    flex-wrap: nowrap;
    `
const Div = styled.div.attrs({
    className: 'div',
})`  
    margin-top:-7.5px;
`
const InnerDiv = styled.div.attrs({
    className: 'innerDiv',
})`  
     margin-left:30%;
     margin-top:30px;
     dispaly:grid;
     grid-template-columns: auto auto auto ;

`


class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Container>
                    <Div>
                        <Logo />
                        <Link to="/" className='link'>
                            Pets System
                            </Link>
                    </Div>

                    <Div>
                        <InnerDiv>
                            <Links />
                            <img src={p1} width="30" height="30" alt="logo" />
                            <img src={p2} width="30" height="30" alt="logo" />
                            <img src={p3} width="30" height="30" alt="logo" />
                            <img src={p4} width="30" height="30" alt="logo" />
                            <img src={p5} width="30" height="30" alt="logo" />
                        </InnerDiv>
                    </Div>
                </Container>
            </Nav>
        )
    }
}

export default NavBar