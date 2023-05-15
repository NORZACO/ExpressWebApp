require('dotenv').config();


module.exports = {
    host: process.env.HOST || '127.0.0.1',
    user: process.env.USER || 'root',
    connectionLimit: process.env.CONNECTION_LIMIT || 10,
    password: process.env.PASSWORD || 'Password1',
    database: process.env.DATABASE || 'university'
};
