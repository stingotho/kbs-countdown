import React, { useState, useEffect } from 'react';
import Snowflake from './Snowflake';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(/* ... initial time left state ... */);
    const [score, setScore] = useState(0);

    // ... existing countdown logic ...

    const handleSnowflakeClick = () => {
        setScore(prevScore => prevScore + 1);
    };

    const createSnowflakes = (num) => {
        return Array.from({ length: num }, (_, index) => {
            const left = Math.random() * 100;
            const animationDuration = 5 + Math.random() * 10;
            const animationDelay = 0;

            return (
                <Snowflake 
                    key={index} 
                    id={index} 
                    left={left} 
                    duration={animationDuration} 
                    delay={animationDelay} 
                    onClick={handleSnowflakeClick} 
                />
            );
        });
    };

    const snowflakes = createSnowflakes(50);

    return (
        <div>
            <h1>❄️KBS Winter Break!❄️</h1>
            {/* Countdown display */}
            <p>Click on the snowflakes to increase your score!</p>
            <div>Score: {score}</div>
            {snowflakes}
        </div>
    );
};

export default CountdownTimer;
