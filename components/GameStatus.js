import { useGame } from '../context/GameContext';

const GameStatus = () => {
  const { playerHealth, enemyHealth } = useGame();

  return (
    <div>
      <h2>Player Health: {playerHealth}</h2>
      <h2>Enemy Health: {enemyHealth}</h2>
    </div>
  );
};

export default GameStatus;
