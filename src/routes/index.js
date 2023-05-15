const customerRouter = require("./customer.routes");
const partnerRouter = require("./partner.routes");

function route(app) {
    
  app.use("/customer", customerRouter);
  app.use("/partner", partnerRouter)

}

module.exports = route;
