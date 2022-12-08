const express = require('express');
const { validator } = require('../src/middleware/validator')
const { logger } = require('../src/middleware/logger')
const { notFoundHandler } = require('./error-handlers/404.js');
const { errorHandler } = require('./error-handlers/500');
const server = express();



// Middleware
server.use(logger);


//Routes
server.get('/hello', (_, res) => res.send('Hello World!!!'));
server.get('/goodbye', (_, res) => res.send('Byeeee!'));
server.get('/person/:name', validator);


// Error Handling
server.use('*', notFoundHandler);
server.use(errorHandler);



async function start(port) {
    server.listen(port, () => console.log(`Server up on port ${port}`));
}

module.exports = {
    server,
    start,
};