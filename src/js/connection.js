const config = require('../../config/database');
const Sequilize = require('sequelize');

module.exports = new Sequilize(
    config.DATABASE_NAME,
    config.DATABASE_USERNAME,
    config.DATABASE_PASSWORD,
    {
        host: config.DATABASE_HOST,
        dialect: config.DATABASE_DRIVER,
        logging: false
    }
);