const express = require('express');
const cors = require('cors');
const dollsController = require('./dolls-route/dolls-controller');

const server = express();

server.use(cors({ origin: 'http://localhost:3000' }));
server.use(express.json());
server.use('/dolls', dollsController);

server.listen(3001, () => {
  console.log('Running on 3001');
});
