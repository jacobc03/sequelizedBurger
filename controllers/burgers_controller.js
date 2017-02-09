//connects this file to server.js
var app = require('./../server.js');
//connects burger var from burger.js to this file
var burger = require('./../models/burger.js');
// Routes
module.exports = function(app) {
	// This displays all the current burgers on index page
	app.get('/', function(req, res) {
		burger.findAll({}).then(function(results) {
		res.render("index", {burgers: results});
	 })
	});

	// This posts new burger then redirected to index page
	app.post('/',function(req,res){
		burger.create({
			burger_name:req.body.newestBurger
		}).then(function(){
			res.redirect('/');
		})
	});

	app.post('/delete/:id',function(req,res){
		burger.update({
			devoured:1
			},{
				where:{ 
					id : req.params.id
				}
			}).then(function(){
				res.redirect('/');
			})
		});
}