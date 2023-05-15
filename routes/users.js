var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var pool = require('./connections');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
//   res.render('users', { users: users });
// });


// router.get('/', function (req, res, next) {
//   pool.query('SELECT 1 as number', (err, result) => {
//     if (err) console.log(err)
//     console.dir(result)
//   })
//   let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
//   res.render('users', { users: users });
// });


// router.get('/', function(req, res, next) {
//   pool.query('SELECT * FROM Users', (err, data) => {
//       res.render('users', { users : data});
//     });
// });


router.get('/', function (req, res) {
  pool.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    res.render('users', { users : results});
  });
});


module.exports = router;