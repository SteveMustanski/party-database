var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'parties_db'
});

connection.connect(function(err) {
  if(err) {
    console.log('error connecting to db: ' + err.stack);
    return;
  }
  console.log('connected as database id ' + connection.threadId);
});

module.exports = connection;

