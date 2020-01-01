import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../actions/song';

import { Pages } from '../components/index';

class HomePageContainer extends Component {

    componentDidUpdate() {
        // this.props.fetchSong(this.props.match.id);
    };

    render() {
        return (
            <Pages.HomePage/>
        );
    };
};

const mapStateToProps = (state) => {
    const { chartState } = state;
    
    return {
        chart : chartState
    }
};

export default connect(mapStateToProps, {
    fetchSong
})(HomePageContainer);