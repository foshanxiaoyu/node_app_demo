var express = require("express");
const path = require("path");
const cros = require("cors");

var app = express();
app.use(cros({ origin: "*" }));
// app.use(cros({ origin: "http://local÷host:8080/" }));

app.get("/main.js", (req, res) => {
  res.sendFile(path.join(__dirname, "./Static/js/main.js"));
});

app.get("/style.css", (req, res) => {
  res.sendFile("./Static/css/style.css", { root: __dirname });
  // res.sendFile(path.join(__dirname, "./static/css/style.css"));
});

app.get("/", (req, res) => {
  // res.sendFile(path.join("./src/index.html"));
  res.sendFile("Index.html", { root: __dirname });
  // res.sendFile(path.join("./src/index.html"));
  // res.send(`<h1>嘿嘿，来了. 扑街用情.哈哈...</h1>`);
});

app.listen(8080); //the server object listens on port 8080
console.log(`Server runninig on 8080 ...`);
