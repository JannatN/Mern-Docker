import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PetsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            type: '',
            age: '',
            color: '',
            price: '',

        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }
    handleChangeInputAge = async event => {
        const age = event.target.value
        this.setState({ age })
    }

    handleChangeInputColor = async event => {
        const color = event.target.value
        this.setState({ color })
    }
    handleChangeInputPrice = async event => {
        const price = event.target.value
        this.setState({ price })
    }

    handleIncludePet = async () => {
        const { name, type, age, color, price } = this.state
        const payload = { name, type, age, color, price }

        await api.addPet(payload).then(res => {
            window.alert(`Pet inserted successfully`)
            this.setState({
                name: '',
                type: '',
                age: '',
                color: '',
                price: '',

            })
        })
    }

    render() {
        const { name, type, age, color, price } = this.state
        return (
            <Wrapper>
                <Title>Add Pet</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                 <Label>Type: </Label>
                <InputText
                    type="text"
                    value={type}
                    onChange={this.handleChangeInputType}
                />
                 <Label>Age: </Label>
                <InputText
                    type="text"
                    value={age}
                    onChange={this.handleChangeInputAge}
                />
                 <Label>Color: </Label>
                <InputText
                    type="text"
                    value={color}
                    onChange={this.handleChangeInputColor}
                />

                <Label>Price: </Label>
                <InputText
                    type="text"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />

                <Button onClick={this.handleIncludePet}>Add Pet</Button>
                <CancelButton href={'/pets/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PetsInsert