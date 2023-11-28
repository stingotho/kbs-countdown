import React, { useState, useEffect } from 'react';
import Snowflake from './Snowflake';

const CountdownTimer = () => {
    // Function to calculate time left until the event
    const calculateTimeLeft = () => {
        const targetDate = new Date('December 14, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance > 0) {
            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            };
        }
        return {};
    };

    // Initialize the state
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [score, setScore] = useState(0);
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Snowflakes initialization
        const initialSnowflakes = Array.from({ length: 50 }, (_, id) => {
            return {
                id,
                left: Math.random() * 100,
                duration: 5 + Math.random() * 10,
                delay: -Math.random() * 5, // Negative delay for an immediate but staggered start
                isVisible: true
            };
        });
        setSnowflakes(initialSnowflakes);

        // Countdown timer update
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up interval
        return () => clearInterval(interval);
    }, []);

    // Handle snowflake click
    const handleSnowflakeClick = (id) => {
        setScore(prevScore => prevScore + 1);
        setSnowflakes(prevSnowflakes => prevSnowflakes.map(snowflake => 
            snowflake.id === id ? { ...snowflake, isVisible: false } : snowflake
        ));
    };

    return (
        <div>
            <h1>❄️KBS Winter Break!❄️</h1>
            <div>
                {Object.keys(timeLeft).length > 0 ? (
                    Object.entries(timeLeft).map(([unit, value]) => (
                        <span key={unit}>
                            {value} {unit}{' '}
                        </span>
                    ))
                ) : (
                    <span>Event has started!</span>
                )}
            </div>
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
