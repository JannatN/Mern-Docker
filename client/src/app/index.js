import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { PetsList, PetsInsert, PetsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/pets/list" exact component={PetsList} />
                <Route path="/pets/create" exact component={PetsInsert} />
                <Route
                    path="/pets/update/:id"
                    exact
                    component={PetsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App