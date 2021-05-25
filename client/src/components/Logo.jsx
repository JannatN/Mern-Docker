import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../assets/logoPets.jpg';



const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
    margin-top:15px;
    color:white;
`

class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <img src={logo} width="50" height="50" alt="logo" />
            </Wrapper>
        )
    }
}

export default Logo