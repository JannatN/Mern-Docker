// import './LandingPage.css';
import { Link } from 'react-router-dom'
import React, { Component } from "react";
import Logo from '../assets/logoPets.jpg';


class LandingPage extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#fbece3',
            }}>
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">
                        <img src={Logo} alt='Pets logo' width="550px" />
                        <ul className="listPets" >
                            <Link to="/pets/list">
                                <button className="button">View Pets</button>
                            </Link>
                            <Link to="/pets/create">
                                <button className="button">Add Pet </button>
                            </Link>
                        </ul>
                    </div>

                    <div class="col-sm"></div>
                </div>
            </div>

        );
    }
}

export default LandingPage;