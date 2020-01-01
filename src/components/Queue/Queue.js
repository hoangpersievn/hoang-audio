import React, { Component } from 'react';
import HaveLazyloadImage from '../../HOC/HaveLazyloadImage';
import QueueItem from './QueueItem';

import "./Queue.css";

class Queue extends Component {

    showQueues = (queues) => {
        let result = "";

        if (queues) {
            result = queues.map((queue, index) => (
                <QueueItem
                    key={index}
                    {...queue}
                    {...this.props}
                />
            ));
        };
        return result;
    };

    handleBtnOnClickClear = () => {
        const { actClearQueue } = this.props;
       
        actClearQueue()
    };

    render() {
        const { queueState, toggleQueue } = this.props;
        return (
            <div className={`queue ${queueState.isQueue ? "active" : ""}`}>
                <div className="queue-panel">
                    <div className="queue-title">Next Up</div>
                    <div className="queue-clear">
                        <button className="sc-ir" onClick={() => this.handleBtnOnClickClear()}>Clear</button>
                    </div>
                    <div className="queue-hide">
                        <button
                            className="sc-ir"
                            onClick={() => toggleQueue()}
                        >
                            <i className="ion-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <ul className="queue-list">
                    {this.showQueues(queueState.queue)}
                </ul>
            </div>
        );
    };
};

export default HaveLazyloadImage(Queue);