import './GoalList.css';

const GoalList = ({ goals }) => {
  return (
    <ul className="goals-list">
      {goals.map((goal) => (
        <li key={goal.id}>{goal.text}</li>
      ))}
    </ul>
  );
};

export default GoalList;
