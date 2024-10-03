import { useGame } from '../context/GameContext';

const CardAction = ({ card }) => {
  const { setPlayerHealth, setEnemyHealth } = useGame();

  const handlePlayCard = () => {
    if (card.type === 'attack') {
      setEnemyHealth((prev) => prev - card.damage);
    } else if (card.type === 'defense') {
      setPlayerHealth((prev) => prev + card.block);
    }
  };

  return <button onClick={handlePlayCard}>Use {card.name}</button>;
};

export default CardAction;
