let gameState = {
    playerHealth: 100,
    enemyHealth: 100,
  };
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(gameState);
    } else if (req.method === 'POST') {
      const { playerAction } = req.body;
      // プレイヤーの行動に応じたロジックを追加
      res.status(200).json(gameState);
    }
  }
  