const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send("Hello There!");
});

app.get("/parks", function(req, res) {
  res.send("The Parks You've Seen");
});
app.listen(port, () => {
  console.log("server running");
});
