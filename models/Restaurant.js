const Sequelize = require("sequelize");
const db = require("../db/connection");
const Menu = require("./menu");

const Restaurant = db.define("restaurants", {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    cuisine: Sequelize.STRING
})
app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.findAll({});
    res.json(restaurants, Menu);
});

module.exports = Restaurant;