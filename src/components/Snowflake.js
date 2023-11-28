// Snowflake.js
import React from 'react';

const Snowflake = ({ id, left, duration, delay }) => {
    const style = {
        position: 'absolute',
        left: `${left}%`,
        top: '-5%', // Start above the viewport
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`
    };

    return <div className="snowflake" id={`snowflake-${id}`} style={style}>❄️</div>;
};

export default Snowflake;