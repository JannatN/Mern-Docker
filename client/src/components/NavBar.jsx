import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Links from './Links'
import p1 from '../pages/p1.png';
import p2 from '../pages/p2.png';
import p3 from '../pages/p3.png';
import p4 from '../pages/p4.png';
import p5 from '../pages/p5.png';


const Container = styled.div.attrs({
    className: 'container',
})`
    height: 80px;
    width: 100%;
    display:grid;
    grid-template-columns: 10% 20% 40%; 30%
`

const Nav = styled.nav.attrs({
    className: `nav`,
})`

`
const Div = styled.div.attrs({
    className: 'div',
})`  
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Container>
                    <Logo />
                    <Links />

                    <Div> <img src={p1} width="40" height="40" alt="logo" />
                        <img src={p2} width="40" height="40" alt="logo" />
                        <img src={p3} width="40" height="40" alt="logo" />
                        <img src={p4} width="40" height="40" alt="logo" />
                        <img src={p5} width="40" height="40" alt="logo" />
                    </Div>
                </Container>
            </Nav>
        )
    }
}

export default NavBar