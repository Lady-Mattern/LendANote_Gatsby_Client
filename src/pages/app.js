import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import Login from '../components/login';
import PrivateRoute from '../components/privateRoute';
import SignUp from '../components/signUp';

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/app/login" />
            <SignUp path="/app/signup" />
        </Router>
    </Layout>
)

export default App;