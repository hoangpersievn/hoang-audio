import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Queue } from '../components/index';
import { toggleQueue, actClearQueue, actDeleteQueueItem } from '../actions/queue';

class QueueContainer extends Component {

    render() {
        return (
            <Queue {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    const { queueState } = state;

    return {
        queueState
    };
};


export default connect(mapStateToProps, {
    toggleQueue,
    actClearQueue,
    actDeleteQueueItem
})(QueueContainer);