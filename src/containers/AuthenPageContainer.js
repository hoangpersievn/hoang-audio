import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pages } from '../components/index';
import { logIn } from '../actions/authen';

class AuthenPageContainer extends Component {

    render() {
        return (
            <Pages.Authen {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    const { authenState } = state;

    return { authenState };
};

export default connect(mapStateToProps, {
    logIn
})(AuthenPageContainer);