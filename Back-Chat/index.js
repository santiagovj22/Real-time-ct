const express = require("express");
const app = express();

const { port } = require("./config/environment");

app.use(express.json());

require("./utils/sockets");

app.listen(port, function() {
  require("./utils/sockets")(this);
  console.log(`Server on port ${port}`);
});
