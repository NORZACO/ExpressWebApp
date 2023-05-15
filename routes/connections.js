const mysql = require('mysql2');
require('dotenv').config();
// const config = require('../config');
// const pool = new mysql.createPool(config);


// const pool = new mysql.createPool({
//     host: process.env.HOST || '127.0.0.1',
//     user: process.env.USER || 'root',
//     connectionLimit: process.env.CONNECTION_LIMIT || 10,
//     password: process.env.PASSWORD || 'Password1',
//     database: process.env.DATABASE || 'university'
// })


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Passord1',
    database: 'university',
    connectionLimit: 10
  });
  
//   GRANT ALL PRIVILEGES ON *.* TO 'mwamuzishadrick'@'localhost' IDENTIFIED BY 'Passord1';
// mysql> CREATE USER 'bruker'@'localhost' IDENTIFIED BY 'Passord1';
// mysql> GRANT ALL PRIVILEGES ON database_name.* TO 'newuser'@'localhost';
// mysql> FLUSH PRIVILEGES;
//mysql> GRANT ALL PRIVILEGES ON *.* TO 'norzaco'@'localhost' IDENTIFIED BY 'Passord2';



module.exports = pool;

