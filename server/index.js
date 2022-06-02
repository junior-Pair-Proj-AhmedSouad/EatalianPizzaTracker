const express = require("express");

const db = require("./database");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/pizza", (req, res) => {
  db.getAllPizzas((err, results) => {
    err ? res.status(500).send(err) : res.status(200).json(results);
  });
});

app.post("/api/pizza", (req, res) => {
  console.log(req.body);
  db.addPizza(
    req.body.photo,
    req.body.name,
    req.body.price,
    req.body.popularity,
    req.body.description
  );
  res.json(req.body);
});

app.delete("/api/employee/:employee_id", function (req, res) {
  console.log(req.params.employee_id);
  let id = req.params.employee_id;
  Employee.remove(
    {
      _id: id,
    },
    function (err) {
      if (err) res.send(err);
      else res.send("Successfully! Employee has been Deleted.");
    }
  );
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
