import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link to="/">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}

export default Nav;