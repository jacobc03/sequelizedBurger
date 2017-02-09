//connects the connection var from connection.js to this file
var connection = require('./connection.js');

//stores  queries in an object
var queries = {
	//connects to all data on burgers table
		selectAll :function (callback) {
		connection.query('SELECT * FROM burgers', callback)
	},
	//will insert new burger into burgers table
		insertOne :function (newestBurger, callback) {
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', newestBurger, callback)
	},
	//will update eated burger by changing the devoured value to 1
		updateOne : function (id, callback) {
		connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?",id, callback)
	}
};

//exports connection to be used in burger.js file
module.exports = queries;