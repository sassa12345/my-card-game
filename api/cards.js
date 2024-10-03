export default function handler(req, res) {
    const cards = [
      { name: "Fireball", type: "attack", damage: 30 },
      { name: "Shield", type: "defense", block: 20 },
      { name: "Heal", type: "special", heal: 25 },
    ];
    const card = cards[Math.floor(Math.random() * cards.length)];
    res.status(200).json(card);
  }
  