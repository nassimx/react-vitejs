import React, { useState } from 'react';
import './Counter.css';
export default function Counter() {
  const [incr, setIncr] = useState(0);
  const [decr, setDecr] = useState(0);

  const handleIncrement = () => setIncr((incr) => incr + 1);
  const handleDecrement = () => setDecr((decr) => decr - 1);

  return (
    <div className="counter">
      <div>
        <button onClick={handleIncrement} className="increment">
          Increment : {incr}
        </button>
        <button onClick={handleDecrement} className="decrement">
          Decrement : {decr}
        </button>
      </div>
    </div>
  );
}
