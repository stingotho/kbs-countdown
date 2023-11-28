import React, { useState, useEffect } from 'react';
import Snowflake from './Snowflake';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(/* ... */);
    const [score, setScore] = useState(0);
    const [snowflakesVisibility, setSnowflakesVisibility] = useState(Array(50).fill(true));
    const [snowflakes, setSnowflakes] = useState([]); // State for snowflakes

    useEffect(() => {
        const newSnowflakes = createSnowflakes(50);
        setSnowflakes(newSnowflakes);
    }, []); // Only on initial render

    const handleSnowflakeClick = (id) => {
        setScore(prevScore => prevScore + 1);
        setSnowflakesVisibility(prevVisibility =>
            prevVisibility.map((isVisible, index) => index === id ? false : isVisible));
    };

    const createSnowflakes = (num) => {
        return Array.from({ length: num }, (_, index) => {
            const left = Math.random() * 100;
            const animationDuration = 5 + Math.random() * 10;
            const animationDelay = Math.random() * 5;

            return (
                <Snowflake
                    key={index}
                    id={index}
                    left={left}
                    duration={animationDuration}
                    delay={animationDelay}
                    isVisible={snowflakesVisibility[index]}
                    onClick={handleSnowflakeClick}
                />
            );
        });
    };

    return (
        <div>
            <h1>❄️KBS Winter Break!❄️</h1>
            <p>Click on the snowflakes to increase your score!</p>
            <div>Score: {score}</div>
            {snowflakes}
        </div>
    );
};

export default CountdownTimer;
