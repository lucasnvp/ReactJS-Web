import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <nav>
                <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                    <div class="container">
                        <Link to="/" class="navbar-brand">Home</Link>
                        <div class="navbar-collapse collapse show" id="navbarResponsive">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">Register</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/" class="nav-link">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Nav;