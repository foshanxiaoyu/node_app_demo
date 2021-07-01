const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:15016/',
}
))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, "static/style.css"));
});
app.get('/promise.js', (req, res) => {
    // res.sendFile(path.join(__dirname, "static/promise.js"))
    res.sendFile(__dirname + "/" + "./static/promise.js")
})

app.listen(15016)
console.log(`Server Listened on 15016`)