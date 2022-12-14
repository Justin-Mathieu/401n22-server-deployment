const { Driver } = require('../Models/driverModel');

const createDriver = async (req, res) => {
    const { make, model, color } = req.body;
    const car = Driver.build({ make, model, color });
    await car.save();
    res.status(200).send(car);
};

const listDrivers = async (req, res) => {

    const drivers = await Driver.findAll();

    res.status(200).send(drivers);
};

const getDriver = async (req, res) => {
    let driver = await Driver.findAll({
        where: {

            id: req.params.id,
        },
    });
    if (driver.length > 0) {
        res.status(200).send(driver[0]);
    } else {



        res.status(404).send(`Not Found with ${req.params.id}`);
    }
};

const updateDriver = async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    let driver = await driver.findOne({ where: { id: id } });
    let updated = await driver.update(update);
    res.status(200).json(updated);
};

const deleteDriver = async (req, res) => {
    let driverDelete = await Driver.destroy({ where: { id: req.params.id } });
    res.status(204).json(`Deleted driver: ${driverDelete}`);
};

module.exports = {
    createDriver,
    listDrivers,
    getDriver,
    updateDriver,
    deleteDriver,
};