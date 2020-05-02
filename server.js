var orm = require('./config/orm');

// console log all of the party names
orm.select("party_name", "parties");

// console log all of the clients;
orm.select('client_name', 'clients');

// console log all of the grownup parties
orm.selectWhere('parties', 'party_type', 'grown-up');

// get all the really cool parties
orm.selectWhere('parties', 'party_type', 'cool');