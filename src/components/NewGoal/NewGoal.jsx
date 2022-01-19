import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = ({ onAddGoal }) => {
  const [entredText, setEntredText] = useState('');
  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: entredText,
    };
    setEntredText('');

    onAddGoal(newGoal);
  };
  const textChangeHandler = (e) => {
    setEntredText(e.target.value);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input onChange={textChangeHandler} value={entredText} type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
