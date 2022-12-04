const express = require('express');

const server = express();

// This server is correct when:

// When you ask for '/hello', you recieve 'Hello!'
server.get('/hello', (_, res) => res.send('Hello world!!!'));

// When you say goodbye, you recieve "nailed it"
server.get('/goodbye', (_, res) => res.send('Byeeee!'));

module.exports = server;