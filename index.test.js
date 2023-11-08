
const request = require('supertest')
const app = require("./src/app.js");
const { Restaurant } = require("./models");
const syncSeed = require("./seed.js");
let restQuantity;


beforeAll(async () => {
    await syncSeed();
    const restaurants = await Restaurant.findAll({});
    restQuantity = restaurants.length;
});

test("should return 200 on get", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.statusCode).toEqual(200); 

});

test("should return and array of restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body [0]).toHaveProperty("cuisine");    
});

test("should return the correct number of restaurants", async () => {
    const response = await request(app).get("/restaurants");
    expect(response.body.length).toEqual(restQuantity); 

});

test("should return the correct restaurants data", async () => {
    const response = await request(app).get("/restaurants/1");
    expect(response.body).toContainEqual(
        expect.objectContaining({
            id: 1,
            name: "AppleBees",
            location: "Texas",
            cuisine: "FastFood"

        })
    );
});


test("should return the correct restaurants data", async () => {
    const response = await request(app).get("/restaurants/1");
    expect(response.body).toEqual(
        expect.objectContaining({
            id: 1,
            name: "AppleBees",
            location: "Texas",
            cuisine: "FastFood"

        })
    );
});

test("should return largest restaurants array", async () => {
    const response = await request(app)
    .post("/restaurants")
    .send({name: "new", location: "joy", cuisine: "fnf"});
    expect(response.body.length).toEqual(restQuantity + 1);  
});

test("should update first item in database", async () => {
    const response = await request(app)
    .put("/restaurants/1")
    .send({name: "new", location: "joy", cuisine: "fnf"});
    const restaurant = await Restaurant.findByPk(1)
    expect(restaurant.name).toEqual("new");  
});

test("should delete db entry by id", async () => {
    await request(app).delete("/restaurants/1");
    const restaurants = await Restaurant.findAll({});
    expect(restaurants.length).toEqual(restQuantity); 
    expect(restaurants[0].id).not.toEqual(1);    
});