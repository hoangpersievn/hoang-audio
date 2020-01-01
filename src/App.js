import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import * as Containers from './containers/index';
import { publicRoutes, privateRoutes } from './routes';
import { logOut } from './actions/authen';
import PrivateRoute from './PrivateRoute';


class App extends Component {

    showRoutes = (routes) => {
        let result = "";

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return result;
    };

    showPrivateRoutes = (routes) => {
        let result = "";

        if(routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <PrivateRoute
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        };
        return result;
    };

    render() {
        const { isAuthenticated, user, logOut } = this.props;

        return (
            <Router>
                <div className="App">
                    <Navbar isAuthenticated={isAuthenticated} logOut={logOut} user={user}/>
                    <Switch>
                        {this.showRoutes(publicRoutes)}
                        {this.showPrivateRoutes(privateRoutes)}
                        
                    </Switch>
                    <Containers.QueueContainer />
                    <Containers.PlayerContainer />
                    <Containers.ModalContainer/>
                </div>
            </Router>
        );
    };
}

const mapStateToProps = state => {
    const { authenState } = state;
    return {
        isAuthenticated: authenState.isAuthenticated,
        user: authenState.user
    };

};

export default connect(mapStateToProps, {
    logOut
})(App);
