// Snowflake.js
import React from 'react';

const Snowflake = ({ id, left, duration, delay }) => {
  const style = {
    position: 'absolute',
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };

  return <div className="snowflake" id={`snowflake-${id}`} style={style}>❄️</div>;
};

export default Snowflake;
