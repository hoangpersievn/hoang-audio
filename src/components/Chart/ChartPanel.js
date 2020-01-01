import React, { useState } from 'react';

const chartPanels = [ 
    { popType: "pop", title: "Top 10 Billboard" }, 
    { popType: "kpop", title: "K-Pop Chart" }, 
    { popType: "vpop", title: "V-Pop Chart" }
];

const ChartPanel = ({ actChangeActiveChart }) => {

    const [chartIndex, setChartIndex] = useState(0);

    const handleBtnOnClick = (index, popType) => {

        actChangeActiveChart(popType);
        setChartIndex(index);
    };

    const showCharts = (charPanels) => {
        return charPanels.map((item, index) => <button
            key={index}
            className={`sc-ir chart-panel-btn ${chartIndex === index ? "active" : ""}`}
            onClick={() => handleBtnOnClick(index, item.popType)}
        >
            {item.title}
        </button>);
    };

    return (
        <div className="chart-panel">
            {showCharts(chartPanels)}
        </div>
    );
};

export default ChartPanel;