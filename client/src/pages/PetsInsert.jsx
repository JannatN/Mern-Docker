import React, { Component } from 'react'
import api from '../api'
import { NavBar } from '../components'
import styled from 'styled-components'
import './index.css';

const Title = styled.h1.attrs({
    className: 'h1',
})`
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    color: #301f10;
    font-weight: 700;


`

const Container = styled.div.attrs({
    className: 'form-group',
})`
    width: 70%;
    margin-left:10px;
    margin-top:0px
    padding-left: 22%;
`
const Wrapper = styled.div.attrs({
    className: 'cont',
})`
    width: 100%;
    margin-top:0px
    background-color: #fbece3;

`

const Label = styled.label`
    margin: 5px;
    font-weight: 700;

`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 2px;
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


    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }
    handleChangeInputSex = async event => {
        const sex = event.target.value
        this.setState({ sex })
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
        const { type, sex, age, color, price } = this.state
        const payload = { type, sex, age, color, price }

        await api.addPet(payload).then(res => {
            window.alert(`Pet inserted successfully`)
            this.setState({
                type: '',
                sex: '',
                age: '',
                color: '',
                price: '',

            })
        })
    }

    render() {
        const { type, sex, age, color, price } = this.state
        return (
            <Wrapper>
                <NavBar></NavBar>
                <Container>
                    <Title>Add Pet</Title>
                    <Label>Type: </Label>
                    <InputText
                        type="text"
                        value={type}
                        onChange={this.handleChangeInputType}
                    />
                    <Label>Sex: </Label>
                    <InputText
                        type="text"
                        value={sex}
                        onChange={this.handleChangeInputSex}
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
                </Container>
            </Wrapper>
        )
    }
}

export default PetsInsert