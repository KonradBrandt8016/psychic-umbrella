const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect("mongodb://localhost:27017/integration_test", (err, database) =>{
    if(err) return console.error(err);
    db = database.db("ikast-api")
    require('./routes')(app, db);
    //puting the below here so that the app wont start if unable to connect to db
    app.listen(port, () => console.log(`Listening on port ${port}`));
});