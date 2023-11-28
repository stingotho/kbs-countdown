import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const targetDate = new Date('December 14, 2023 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({});
            }
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
