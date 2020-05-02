var connection = require('./connection');

var orm = {
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if(err) throw err;
      console.log(result)
    });
  },
  selectWhere: function(tableInput, colToSearch, valueOfColumn) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valueOfColumn], function(err, result) {
      if(err) throw err;
      console.log(result);
    });
  }
}

module.exports = orm;