const socket = io();

let opponentId;
let hand = [];

// ゲーム開始時の処理
socket.on('gameStart', (data) => {
  document.getElementById('status').innerText = 'Opponent found! Game started.';
  opponentId = data.opponent;
  document.getElementById('draw-card').disabled = false;
});

// カードを引くボタンのイベント
document.getElementById('draw-card').addEventListener('click', () => {
  const newCard = `Card ${Math.floor(Math.random() * 100)}`;
  hand.push(newCard);
  renderHand();
  socket.emit('action', { opponent: opponentId, action: 'draw', card: newCard });
});

// 相手のアクションを受け取る
socket.on('action', (data) => {
  if (data.action === 'draw') {
    document.getElementById('status').innerText = `Opponent drew a card: ${data.card}`;
  }
});

// 手札の表示更新
function renderHand() {
  const handDiv = document.getElementById('hand');
  handDiv.innerHTML = '';
  hand.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerText = card;
    handDiv.appendChild(cardDiv);
  });
}
