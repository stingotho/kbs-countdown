import React from 'react';

const Snowflake = ({ id, left, duration, delay, onClick, isVisible }) => {
    const style = {
        position: 'absolute',
        left: `${left}%`,
        top: '-5%', // Start above the viewport
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        cursor: 'pointer', // Change cursor to indicate clickable
        display: isVisible ? 'block' : 'none', // Control visibility
    };

    return <div className="snowflake" style={style} onClick={() => onClick(id)}>❄️</div>;
};

export default Snowflake;
