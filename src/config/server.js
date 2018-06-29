const port = 3003;

const bodyParser = require('body-parser');
const exporess = require('express');
const server = exporess();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`)
});

module.exports = server;