import React from "react";
import './ChartBar.css';

const ChartBar = (props) => {
    let barFill = '0%';

    if(props.max > 0){
        barFill = Math.round((props.value/props.max)*100)+'%';
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill"></div>
            <div className="chart-bar_label">{props.label}</div>
        </div>
    </div>
}

export default ChartBar;