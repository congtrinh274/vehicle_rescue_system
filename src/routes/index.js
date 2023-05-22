const customerRouter = require("./customer.routes");
const partnerRouter = require("./partner.routes");
const requestRouter = require("./request.routes");

function route(app) {
    
  app.use("/request", requestRouter)
  app.use("/customer", customerRouter);
  app.use("/partner", partnerRouter)

}

module.exports = route;
