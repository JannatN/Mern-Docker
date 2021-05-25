import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


// const List = styled.div.attrs({
//     className: 'navbar-nav mr-auto',
// })`
// `

const Item = styled.div.attrs({
    className: 'item',
})`
    margin-top: 15px;
`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">
                    Pets System
                </Link>
                    <Item>
                    <Link to="/pets/list" className="link">
                        List of Pets
                            </Link>
                    <Link to="/pets/create" className="link">
                        Add Pet
                </Link>
                </Item>
            </React.Fragment >
        )
    }
}

export default Links