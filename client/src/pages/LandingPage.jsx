import './LandingPage';
import { Link } from 'react-router-dom'
import React, { Component } from "react";
import Logo from './logoPets.jpg';


class LandingPage extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <img src={Logo} alt='Pets logo' />
                        <ul className="listPets" >
                            <Link to="/pets/list">
                                <a class="btn btn-primary btn-lg">View Pets</a>
                            </Link>
                            <Link to="/pets/create">
                                <a class="btn btn-primary btn-lg"> Add Pet </a>
                            </Link>
                        </ul>

                        <p>Only Admins Can use the System</p>
                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>

        );
    }
}

export default LandingPage;