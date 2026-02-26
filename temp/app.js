const http = require("node:http");
const url = require("node:url");

const server = http.createServer(function (req, res) {
  //Parse URL on GET
  parsedURL = url.parse(req.url, true);
  let name = parsedURL.query.name;

  let body = "";
  req.on("data", function (chunk) {
    body = body + chunk.toString();
  });

  req.on("end", function (chunk) {
    body = body + chunk.toString();
  });

  console.log(req.url);
  console.log(parsedURL.query.name);
  console.log(parsedURL);
  res.end(`<b>Hello ${name}!</b>`);
});

server.listen(3000, function () {
  console.log("Listening on Port 3000:");
});
