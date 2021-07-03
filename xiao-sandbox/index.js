var express = require("express");
var app = express();
const cros = require("cors");

app.use(cros({ origin: "http://localhost:8080/" }));

app.get("/", (req, res) => {
  res.send(`<h1>嘿嘿，来了.扑街用情</h1>`);
});

app.listen(8080); //the server object listens on port 8080
console.log(`Server runninig on 8080 ...`);
