import { useState } from 'react';
import CardAction from './CardAction';

const DrawCardButton = () => {
  const [card, setCard] = useState(null);

  const drawCard = async () => {
    const res = await fetch('/api/cards');
    const data = await res.json();
    setCard(data);
  };

  return (
    <div>
      <button onClick={drawCard}>Draw a Card</button>
      {card && <CardAction card={card} />}
    </div>
  );
};

export default DrawCardButton;
