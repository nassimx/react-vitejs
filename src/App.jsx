import './App.css';
import React, { useState } from 'react';

import Counter from './components/Counter/Counter';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [courseGoals, setCoursGoals] = useState([
    { id: 'cg1', text: 'learn vitejs' },
    { id: 'cg2', text: 'learn hmr' },
    { id: 'cg3', text: 'build project' },
  ]);
  const addNewGoalHandler = (newGoal) => {
    // setCoursGoals(courseGoals.concat(newGoal));
    setCoursGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
    // console.log(courseGoals);
  };
  return (
    <div className="cours">
      <h1>cours goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
      <Counter />
    </div>
  );
}

export default App;
