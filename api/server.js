const express = require('express');
const helmet = require('helmet');

// routes
const dishesRouter = require('../dishes/dished-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>sanity<h1>');
});

server.use('/api/dishes', dishesRouter);

module.exports = server;
