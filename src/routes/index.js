const customerRouter = require("./customer.routes");
const partnerController = require("./partner.routes");

function route(app) {
    
  app.use("/customer", customerRouter);
  app.use("/partner", partnerController)

}

module.exports = route;
