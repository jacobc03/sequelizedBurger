//connects this page with the exports from orm.js
var queries = require("./../config/orm.js");

var burger = {
	// // When homepage is called, a function is run that will call selectAll() to populate list of undevoured burgers
	homePage: function(req, res){
		queries.selectAll(function(error, results) {
		    if (error) throw error
		    // Results are sent to index.handlebars layout
		    res.render("index", {burgers: results});
		})
	},
	// When devour is called, a function is run that will call updateOne() to change devour from true to false
	devour: function(req, res, id) {
		queries.updateOne(id, function(error, results) {
		    if (error) throw error
		    //refreshes page and returns to homepage with updated list of devoured burgers
		    res.redirect('/');
		})
	},
	// When newburger is called, a function is run that will call insertOne() to input a new burger to mysql
	newBurger: function(req, res, newestBurger) {
		queries.insertOne(newestBurger, function(error, results) {
		    if (error) throw error
		    //refreshes page and returns to homepage with updated burger list
		    res.redirect('/');
		})
	}
}
//exports burger to be used in burger_controller.js file
module.exports = burger;