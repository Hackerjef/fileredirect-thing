const config = require("./config.json");
const express = require("express");
var proxy = require("http-proxy-middleware");
const app = express();

app.use(function (err, req, res) {
  res.status(500).send("500 - Something was error!");
});

app.use("/", 
  proxy({ target: config.url.old, changeOrigin: true })
);

app.listen(config.express.port, () => {
  console.log("redirect server started on " + config.express.port);
});
