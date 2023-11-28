// App.js
import React from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Snowflake from './components/Snowflake';

const createSnowflakes = (num) => {
  return Array.from({ length: num }, (_, index) => {
    const left = Math.random() * 100; // Random horizontal position
    const animationDuration = 5 + Math.random() * 10; // Random duration
    const animationDelay = Math.random() * 10; // Random delay

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
