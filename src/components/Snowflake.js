import React from 'react';

const Snowflake = ({ id, left, duration, delay, onClick }) => {
    const style = {
        position: 'absolute',
        left: `${left}%`,
        top: '-5%', // Start above the viewport
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        cursor: 'pointer' // Change cursor to indicate clickable
    };

    return <div className="snowflake" id={`snowflake-${id}`} style={style} onClick={() => onClick()}>❄️</div>;
};

export default Snowflake;
