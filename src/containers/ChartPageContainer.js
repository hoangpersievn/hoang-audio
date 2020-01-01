import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from '../components/index';
import { actChangeActiveChart } from '../actions/chart';

class ChartContainer extends Component {

    render() {
        
        return (
            <Chart {...this.props}/>
        );
    };
};

const mapStateToProps = state => {
    const { chartState } = state;

    return {
        chart: chartState[chartState.activeChart],
        activeChart: chartState.activeChart
    };
};

export default connect(mapStateToProps, {
    actChangeActiveChart
})(ChartContainer);