import React from 'react';

const Snowflake = ({ id, left, duration, delay, onClick }) => {
    const style = {
        position: 'absolute',
        left: `${left}%`,
        top: '-5%',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        cursor: 'pointer'
    };

    return <div className="snowflake" style={style} onClick={onClick}>❄️</div>;
};

export default Snowflake;
