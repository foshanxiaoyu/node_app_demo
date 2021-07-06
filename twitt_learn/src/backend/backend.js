const express = require('express')
const cors = require('cors')
// INIT DB

let MongoClient = require('mongodb').MongoClient;
// use when starting application locally
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
// let mongoUrlDocker = "mongodb://admin:password@mgdb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "twitter-db" in demo with docker. "YOU-DB" in IM with docker-compose


// DB Init 
const client = new MongoClient(mongoUrlLocal)
// Wait for connect
client.connect()  // mongdb connected.

let databaseName = "twitter-db"


const app = express()

app.use(cors())
app.use(express.json())

// app.use(function (req, res, next) {
//     res.setHeader('Content-Type', 'text/event-stream');
//     next();
// });

app.get('/', (req, res) => {
    res.json({
        message: "the is back-end ."
    })
});

app.get('/mews', (req, res) => {
    console.log("客户端进来拿到 Cursor, cursor>toArry()")
    client.db(databaseName).collection('mews').find({}).toArray()
        .then(result => res.json(result))
});



function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' && mew.context && mew.context.toString().trim() !== ''
};



app.post('/mews', (req, res) => {
    console.log(res.body)
    if (isValidMew(req.body)) {

        // INIT obj mew scheme
        const mew = {
            name: req.body.name.toString(),
            phone: req.body.phone.toString(),
            context: req.body.context.toString(),
            create: new Date,
        }

        console.log('mew:' + mew)
        // ========================================
        client.db(databaseName).collection('mews')
            .insertOne(mew)
            .then(createdMew => res.json(createdMew))
    }
    else {
        res.status(422)
        res.json({
            message: 'Server Port 无法拿到前端数据...'
        })
    }
})



app.listen(15005, () => {
    console.log('Listening on http://localhost:15005')
})
