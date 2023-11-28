// App.js
import React from 'react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Snowflake from './components/Snowflake';

const createSnowflakes = (num) => {
  return Array.from({ length: num }, (_, index) => {
    const left = Math.random() * 100; // random position from left
    const animationDuration = 5 + Math.random() * 10; // random duration between 5 to 15 seconds
    const animationDelay = Math.random() * 10; // random start delay

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
