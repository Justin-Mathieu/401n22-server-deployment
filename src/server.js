const express = require('express');
const { validator } = require('./middleware/validator')
const { logger } = require('./middleware/logger')
const { notFoundHandler } = require('./error-handlers/404.js');
const { errorHandler } = require('./error-handlers/500');
const { listCars, getCar, createCar, deleteCar, updateCar } = require('./Routes/CarRoutes');
const { listDrivers, getDriver, createDriver, deleteDriver, updateDriver } = require('./Routes/driverRoutes');

const server = express();



// Middleware
server.use(logger);


// Random Routes
server.get('/hello', (_, res) => res.send('Hello World!!!'));
server.get('/goodbye', (_, res) => res.send('Byeeee!'));
server.get('/person/:name', validator);


// Car routes
server.get('/car/:id', getCar);
server.get('/car', listCars);
server.post('/car', createCar);
server.delete('/car/:id', deleteCar);
server.put('/car/:id', updateCar);


// Driver routes 
server.get('/pet/:id', getDriver);
server.get('/pet', listDrivers);
server.post('/pet', createDriver);
server.delete('/pet/:id', deleteDriver);
server.put('/pet/:id', updateDriver);


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