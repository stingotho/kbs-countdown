import React, { useState, useEffect } from 'react';
import Snowflake from './Snowflake';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(/* ... */);
    const [score, setScore] = useState(0);
    const [snowflakes, setSnowflakes] = useState([]); // State for snowflakes

    useEffect(() => {
        setSnowflakes(createSnowflakes(50));
    }, []);

    const handleSnowflakeClick = (id) => {
        setScore(prevScore => prevScore + 1);
        setSnowflakes(prevSnowflakes => prevSnowflakes.map(snowflake => 
            snowflake.id === id ? { ...snowflake, isVisible: false } : snowflake
        ));
    };

    const createSnowflakes = (num) => {
        return Array.from({ length: num }, (_, id) => {
            return {
                id,
                left: Math.random() * 100,
                duration: 5 + Math.random() * 10,
                delay: Math.random() * 5,
                isVisible: true
            };
        });
    };

    return (
        <div>
            <h1>❄️KBS Winter Break!❄️</h1>
            <p>Click on the snowflakes to increase your score!</p>
            <div>Score: {score}</div>
            {snowflakes.map(snowflake => 
                snowflake.isVisible && (
                    <Snowflake
                        key={snowflake.id}
                        {...snowflake}
                        onClick={() => handleSnowflakeClick(snowflake.id)}
                    />
                )
            )}
        </div>
    );
};

export default CountdownTimer;
