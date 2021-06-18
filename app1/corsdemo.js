let express = require('express');
let path = require('path');
let fs = require('fs');
app = express()
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {
    // Handle the get for this route
    res.sendFile(path.join(__dirname, "demo.html"));
});

app.get('/profile-picture', function (req, res) {
    let img = fs.readFileSync(path.join(__dirname, "images/profile-2.jpg"));
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});


app.post('/', function (req, res, next) {
    // Handle the post for this route

});

app.listen(9999, function () {
    console.log("app listening on port 9999!");
});