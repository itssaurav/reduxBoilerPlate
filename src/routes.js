import { Route,IndexRoute,} from 'react-router';
import React from 'react';
import App from './App.js';
import Layout from './components/layout'


export default (
    <Route path="/" component={App}>
        <IndexRoute path="/" component = {Layout} />
    </Route>
);
