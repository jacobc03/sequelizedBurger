//connects this file to server.js
var app = require('./../server.js');
//connects burger var from burger.js to this file
var burger = require('./../models/burger.js');
// Routes
module.exports = function(app) {
	// This takes the user to the homepage
	app.get('/', function(req, res) {
		//homePage() is called here
		burger.homePage(req, res);
	})

	// This post happens when the devour button is pushed
	app.post('/delete/:id', function(req, res) {
		// this var is created to store the id of the burger the user wants to devour
		var id = req.params.id;
		// the id var is past into the function below and on to updateOne() so the DataBase can be updated
		burger.devour(req, res, id);
	})

	// This post happens when the order button is pushed
	app.post('/', function(req, res) {
		// This var is created to store string the user enters into the form
		var newestBurger= req.body.newestBurger;
		// the newestBurger var is past into the function below and on to insertOne() so the DataBase can be updated
		burger.newBurger(req, res, newestBurger);
	})
}