const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "f7_move_db",
  "f7_move_db_user",
  "NVLnEjSqhkT28RiGp29gbbBznpVstDvq",
  {
    host: "dpg-ck8ps1vq54js73d4u6pg-a.oregon-postgres.render.com",
    dialect: "postgres",
    dialectModule: require('pg'),
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