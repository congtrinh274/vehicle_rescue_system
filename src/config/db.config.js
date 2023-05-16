const Sequelize = require("sequelize");
const mysql2 = require("mysql2")

const sequelize = new Sequelize(
  "vehicle_rescue_system_db",
  "vehicle_rescue_system_db_user",
  "Nuw6KLsZEHGERsCLOU6uLVmfv0Szm2kY",
  {
    host: "dpg-chhfl1d269v0od585is0-a.singapore-postgres.render.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  }
);

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = sequelize