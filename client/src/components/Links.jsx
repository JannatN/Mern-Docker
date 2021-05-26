import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Div = styled.div.attrs({
    className: 'div',
})`
    margin-left: 10px;
`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                    <Div>
                        <Link to="/pets/list" className="link">
                            List of Pets
                            </Link>
                        <Link to="/pets/create" className="link">
                            Add Pet
                </Link>
                    </Div>
            </React.Fragment >
        )
    }
}

export default Links