import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/ui';
import { Pages } from '../components/index';

class UserContainer extends Component {

    render() {
        return (
            <Pages.User {...this.props}/>
        );
    };
};

export default connect(null, {
    toggleModal
})(UserContainer);