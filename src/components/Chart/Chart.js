import React from 'react';
import { compose } from 'redux';
import ChartPenal from './ChartPanel';
import HaveDropdown from '../../HOC/HaveDropDown';
import HaveLazyloadImage from '../../HOC/HaveLazyloadImage';
import ChartFirstItem from './ChartFirstItem';
import ChartItem from './ChartItem';

import './Chart.css';

const Chart = (props) => {
    const { chart } = props;

    const renderCharts = (charts) => {
        let result = "";

        if (charts.length > 0) {
            result = charts.map((chart, index) => {
                if (index === 0)
                    return (
                        <ChartFirstItem
                            key={index}
                            order={index + 1}
                            {...chart}
                            {...props}
                        />
                    )
                return (
                    <ChartItem
                        key={index}
                        order={index + 1}
                        {...chart}
                        {...props}
                    />
                )
            });
        }
        return result;
    };

    return (
        <div className="chart">
            <ChartPenal actChangeActiveChart={props.actChangeActiveChart}/>
            <div className="featured-image">
                <div className="bgImageContainer" style={{ backgroundImage: `url(${chart[0].thumbnail})` }}>
                </div>
            </div>
            <ul className="chart-list">
                {renderCharts(chart)}
            </ul>
        </div>
    )
};

export default compose(HaveDropdown, HaveLazyloadImage)(Chart);