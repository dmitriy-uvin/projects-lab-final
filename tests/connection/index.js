const connection = require('../../src/js/connection');
const chalk = require('chalk');

module.exports = {
    run: (async () => {
        try {
            await connection.authenticate();
            console.log(chalk.green('Connection has been established successfully.'));
        } catch (error) {
            console.log(chalk.red('Database connection not established!'));
        }
    })
};
