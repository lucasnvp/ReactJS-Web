import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from "./pages/Layout";

const app = document.getElementById('app');

render((
    <Router>
        <Route path="/" component={Layout} />
    </Router>),
    app
);