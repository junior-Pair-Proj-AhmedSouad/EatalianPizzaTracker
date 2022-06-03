//USER SAMPLE DATA
const User = require("./user.js");
const sampleDataUser = require("../dataUser.json");
const insertSampleUser = function () {
    User.create(sampleDataUser)
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
// insertSampleUser();
