const http = require("node:http");
const url = require("node:url");
const queryString = require("node:querystring");

const server = http.createServer(function (req, res) {


  //Parse URL on GET
  if(req.method === 'GET'){
    let parsedURL = url.parse(req.url, true);
    let name = parsedURL.query.name;
    console.log(parsedURL.query);
  }
 
  //Parse Request Body on POST
  if (req.method === "POST") {
    //Parse POST Request Body
    let body = "";
    let parsedData = "";
    req.on("data", function (chunk) {
      body = body + chunk.toString();
    });

    req.on("end", function () {
      parsedData = queryString.parse(body);
      console.log(parsedData);
    });
  }

  res.end(`<b>Hello World!</b>`);
});

server.listen(3000, function () {
  console.log("Listening on Port 3000:");
});
