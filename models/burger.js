var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

// Creates a Table model 
var Burger = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  },
  created_at: {
    type: Sequelize.DATE,
    //makes default current date/time
     defaultValue: Sequelize.NOW
  }
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

module.exports = Burger;
