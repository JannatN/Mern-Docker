import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import './index.css';
import styled from 'styled-components'
import 'react-table/react-table.css'
import { NavBar } from '../components'

const Wrapper = styled.div`
    width: 100%;
    margin-top:0px
    background-color: #fbece3;
    `

const Container = styled.div.attrs({
    className: 'form-group',
})`
    width: 100%;
    margin-top:0px
`
const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdatePet extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/pets/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeletePet extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the pet ${this.props.id} permanently?`,
            )
        ) {
            api.deletePetById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class PetList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pets: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPets().then(pets => {
            this.setState({
                pets: pets.data.data,
                isLoading: false,
            })
            console.log(pets)

        })
    }

    render() {
        const { pets, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },

            {
                Header: 'Type',
                accessor: 'type',
                filterable: true,
            },
            {
                Header: 'Sex',
                accessor: 'sex',
                filterable: true,
            },
            {
                Header: 'Age',
                accessor: 'age',
                filterable: true,
            }, {
                Header: 'Color',
                accessor: 'color',
                filterable: true,
            },
            {
                Header: 'Price',
                accessor: 'price',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeletePet id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdatePet id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!pets.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <NavBar></NavBar>
                <Container>
                    {showTable && (
                        <ReactTable
                            data={pets}
                            columns={columns}
                            loading={isLoading}
                            defaultPageSize={10}
                            showPageSizeOptions={true}
                            minRows={0}
                        />
                    )}
                </Container>

            </Wrapper>
        )
    }
}

export default PetList