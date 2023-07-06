const mongoDB = require("mongodb").MongoClient;
const express = require('express');
const app = express();
const cors = require("cors");
const url = "mongodb://127.0.0.1:27017";
const database_name = 'pizzeria';

mongoDB.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log("connection error: " + err);
    } else {
        console.log("connection Established");
        const data_base = client.db(database_name);
        const collection1 = data_base.collection("pizza");
        const collection2 = data_base.collection('ingredients');

        app.use(cors());
        app.use(express.json());

        app.get('/getPizza', (req, res) => {
            collection1.find().toArray((err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send({ error: "Internal server error" });
                } else {
                    res.send(result);
                }
            });
        });

        app.get('/getIngredient', (req, res) => {
            collection2.find().toArray((err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send({ error: "Internal server error" });
                } else {
                    res.send(result);
                }
            });
        });

        app.listen(3001, () => {
            console.log("Server connected");
        });
    }
});
