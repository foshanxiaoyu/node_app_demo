console.log("Hi Server start....");
const express = require('express');
const path = require('path');
const port = process.env.PORT || 15000

// const URL_HOST = 'http://localhost:9900/mews' || 'https://yu.com/9/xxws';


const app = express()

// // app.use(cors())
// app.all(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     next();
// });

app.use(express.json())


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "client/index.html"));
});

app.get('/main.css', (req, res) => {
    res.sendFile(__dirname + "/" + "client/static/css/main.css")
});
app.get('/client.js', (req, res) => {
    res.sendFile(__dirname + "/" + "client/client.js")
});
app.get('/loading.gif', (req, res) => {
    res.sendFile(__dirname + "/" + "client/static/images/loading.gif")
});


app.listen(port, console.log(`Server Listening on the ${port}....`))
// app.listen(port, console.log('Server Listening on the http://localhost:15000'))
