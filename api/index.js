const server = require("./src/app.js");
const { db } = require("./src/models/index");
require("dotenv").config();
const { PORT } = require("./src/utils/config/index");
const { chargeTempApiToDb } = require("./src/controller/Temperament");

// Syncing all the models at once.
db.sync()
  .then(() => {
    chargeTempApiToDb();
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.error(err);
  });
