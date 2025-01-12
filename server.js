//Load HTTP module (thư viện đã có sẵn khi cài đặt node.js)
const http = require("http");

const hostname = "localhost"; //cái này === http://localhost
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n hoi dan it voi Edric");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//tự động chạy trên localhost
// server.listen(port, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
