const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.findAll({});
    res.json(restaurants);

});
app.get('/restaurants' async (req, res)  => {
    const number = req.params.id;
    const restaurant = await Restaurant.findByPk(number);
    res.json(number)

})

app.post('/restaurants', async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(number)
})

app.put('/restaurants/:id', async (req, res) => {
    const updateRestaurant = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updateRestaurant)
})

app.delete('/restaurants/:id', async (req, res) => {
    const deleteRestaurant = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(deleteRestaurant);
})

module.exports = app;