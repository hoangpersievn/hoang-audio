import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleQueue } from '../actions/queue';
import { fetchSong, actOnPause, actOnPlay, actTogglePlay } from '../actions/song';
import { Player } from '../components/index';


class PlayerContainer extends Component {

    render() {
        return (
            <Player {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    const { songData, queueState } = state;

    return {
        songData: songData.data,
        isFetching: songData.isFetching,
        isPlaying: songData.isPlaying,
        queue: queueState.queue
    }
};

export default connect(mapStateToProps, {
    toggleQueue,
    fetchSong,
    actOnPause,
    actOnPlay,
    actTogglePlay
})(PlayerContainer);