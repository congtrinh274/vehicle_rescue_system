'use strict';
const mysql = require('mysql2');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Cong27042002',
  database : 'vehicle_rescue_system_db'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;
