const { config } = require('dotenv');
const server = require('./src/server');

config();

server.start(process.env.PORT || 3000);


