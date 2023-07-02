var mongoDB = require("mongodb").MongoClient;
var express = require('express');
var app = express()
const cors = require("cors");
const url = "mongodb://localhost:27017"
const database_name='pizzeria'
mongoDB.connect(url, {useUnifiedTopology:true}, (err, client) => {
    if(err){
        console.log("connection error:" + err)
    }
    else {
        console.log("connection Established")
        data_base = client.db(database_name)
        collection1 = data_base.collection("pizza")
        collection2 = data_base.collection('ingredients')
    }
})

app.use(cors());
app.use(express.json());
app.get('/getPizza', (res) => {
    collection1.find().toArray((err,result) => {
        if(err) {
            console.log(err)
        }
        else{
            res.json(result);
        }
    })
})


app.get('/getIngredient', (res) => {
    collection2.find().toArray((err, result) => {
        if(err) {
            console.log(err)
        }
        else{
             res.json(result);
        }
    })
})
app.listen(3001, () => console.log("Server connected"))