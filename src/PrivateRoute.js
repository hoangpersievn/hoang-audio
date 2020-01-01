import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute =  ({path, exact, isAuthenticated, component: Component}) => {
    
    return (
        <Route
            path={path}
            exact={exact}
            render={
                props => {
                    return (
                        isAuthenticated
                        ? <Component {...props}/>
                        : <Redirect to={{
                            pathname: "/login",
                            state: {from: props.location.pathname}
                        }}/>
                    )
                }
            }
        />
    );
};

const mapStateToProps = state => {
    const { authenState } = state;

    return { isAuthenticated: authenState.isAuthenticated }
}

export default connect(mapStateToProps)(PrivateRoute);