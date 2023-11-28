// App.js
import React from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Snowflake from './components/Snowflake';

// App.js or CountdownTimer.js
const createSnowflakes = (num) => {
  return Array.from({ length: num }, (_, index) => {
    const left = Math.random() * 100; // Random horizontal position
    const animationDuration = 3 + Math.random() * 5; // Duration between 3 to 8 seconds
    const animationDelay = 0; // Uniform delay of 0.5 seconds for all snowflakes

    return <Snowflake key={index} id={index} left={left} duration={animationDuration} delay={animationDelay} />;
  });
};


function App() {
  const snowflakes = createSnowflakes(50); // Create 50 snowflakes
  return (
    <div className="App">
      {snowflakes}
      <header className="App-header">
        <CountdownTimer />
      </header>
    </div>
  );
}

export default App;
