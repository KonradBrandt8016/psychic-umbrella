module.exports = function(app, db) {
  app.post("/user", (req, res) => {
    var user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    db.collection("users").insert(user, (err, result) => {
      if (err) {
        res.send({ error: "Unable to create user." });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.post("/user/login", (req, res) => {
    var user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    const details = { name: user.name, password: user.password };
    db.collection("users").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "Login fail" });
      } else {
        res.send(item);
      }
    });
  });

  app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("users").findOne(details, (err, item) => {
      if (err) {
        res.send({ error: "Unable to retrieve user" });
      } else {
        res.send(item);
      }
    });
  });

  app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection("users").remove(details, (err, item) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send("User " + id + " deleted!");
      }
    });
  });
};
