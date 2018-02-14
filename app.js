const express = require('express');
const app = express();
const io = require('socket.io')();

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/users'));

const server = app.listen(3000, () => {
  console.log('app running on port 3000');
});

io.attach(server);

io.on('connection', (socket) => {
  console.log('a user has connected');
  io.emit('connectMsg', { for: 'everyone', message : `${socket.id} has entered` });

  socket.on('connectMsg', msg => {
    io.emit('connectMsg', { for: 'everyone', message : msg});
  });

  socket.on('disconnect', () => {
    console.log('a user has disconnected');

    io.emit('disconnect message', `${socket.id} has left.`)
  });
});
