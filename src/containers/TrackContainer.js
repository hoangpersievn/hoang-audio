import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Track } from '../components/index';

class TrackContainer extends Component {

    render() {
        return (
            <Track {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    const { trackState } = state;

    return {
        track: trackState.track
    }
};

export default connect(mapStateToProps, null)(TrackContainer);