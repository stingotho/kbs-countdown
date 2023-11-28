import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Function to calculate time left until the target date
    const calculateTimeLeft = () => {
        const targetDate = new Date('December 14, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance > 0) {
            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            };
        }
        return {}; // Return an empty object if the event has started
    };

    // Initialize the state with the correct time left
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>❄️KBS Winter Break!❄️</h1>
            {Object.keys(timeLeft).length === 0 ? (
                <p>Event has started!</p>
            ) : (
                <div>
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <span key={unit}>
                            {value} {unit}{' '}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;
