import { GameProvider } from '../context/GameContext';
import GameStatus from '../components/GameStatus';
import DrawCardButton from '../components/DrawCardButton';

const Home = () => {
  return (
    <GameProvider>
      <h1>Card Game</h1>
      <GameStatus />
      <DrawCardButton />
    </GameProvider>
  );
};

export default Home;
