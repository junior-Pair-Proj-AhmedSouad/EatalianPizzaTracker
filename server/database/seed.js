const { db } = require("./index.js");
const Pizza = require("./pizza.js");
const sampleData = require("../data.json");
const insertSamplePizza = function () {
  Pizza.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};
insertSamplePizza();
