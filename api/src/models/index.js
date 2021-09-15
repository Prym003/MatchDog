const { Sequelize } = require("sequelize");
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
} = require("../utils/config/index");
const BreedFactory = require("./Breed");
const TemperamentFactory = require("./Temperament");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

//conect my instance of sequelize with my models
const Breed = BreedFactory(sequelize);
const Temperament = TemperamentFactory(sequelize);

//create my relations between my models
Breed.belongsToMany(Temperament, { through: "Breed_Temperament" });
Temperament.belongsToMany(Breed, { through: "Breed_Temperament" });

module.exports = {
  db: sequelize,
  Breed,
  Temperament,
};
