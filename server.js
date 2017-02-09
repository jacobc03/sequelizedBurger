//installs packages
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var app = express();

//needed for heroku
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// connects to Public folder where my css is
app.use(express.static(__dirname + '/Public'));
app.use(methodOverride("_method"));
// connects to main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connects this page with burgers_controller.js
require('./controllers/burgers_controller.js')(app);

//tells app to start listening to port
app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});

