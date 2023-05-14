const customerRouter = require("./customer.routes");

function route(app) {
    
  app.use("/customer", customerRouter);

}

module.exports = route;
