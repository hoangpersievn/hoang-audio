import React from 'react';

// import Chart from '../../Chart/Chart';
import ChartContainer from '../../../containers/ChartPageContainer';
// import Track from '../../Track/Track';
import TrackContainer from '../../../containers/TrackContainer';
import Choices from './Choices';

import './HomePage.css';

const HomePage = (props) => {
    return (
        <div className="homepage home-container">
            <div className="track-wrapper">
                <Choices/>
                <TrackContainer/>
            </div>
            <div className="chart-wrapper">
                <ChartContainer/>
            </div>
        </div>
    );
};

export default HomePage;