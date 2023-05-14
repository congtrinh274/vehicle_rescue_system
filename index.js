const express = require('express');


const route = require("./src/routes");


// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3000;

// Middleware handle body data of post method
app.use(express.urlencoded({
    extended: true,
  }))
  app.use(express.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Welcome to my web server");
});

// route init
route(app);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
