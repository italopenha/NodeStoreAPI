const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

global.SALT_KEY = process.env.SALT_KEY;

module.exports = {
    connectionString: process.env.CONNECTION_STRING,
    containerConnectionString: ''
}