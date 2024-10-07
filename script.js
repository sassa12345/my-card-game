const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 3000;

// クライアント側のHTML、CSS、JSファイルを提供
app.use(express.static('public'));

let players = [];

io.on('connection', (socket) => {
  console.log('A player connected:', socket.id);

  // プレイヤーが接続したらプレイヤーリストに追加
  players.push(socket.id);

  // 2人揃ったらゲーム開始
  if (players.length === 2) {
    io.to(players[0]).emit('gameStart', { opponent: players[1] });
    io.to(players[1]).emit('gameStart', { opponent: players[0] });
  }

  // プレイヤーが切断された場合
  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);
    players = players.filter(id => id !== socket.id);
  });

  // プレイヤーのアクションを受信して相手に送信
  socket.on('action', (data) => {
    socket.to(data.opponent).emit('action', data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
