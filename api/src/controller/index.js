const { Breed, Temperament } = require("../models/index");
const axios = require("axios");

class ModelController {
  constructor(model) {
    this.model = model;
  }

  getApiData = async () => {
    const apiURL = await axios.get("https://api.thedogapi.com/v1/breeds");
    const apiData = await apiURL.data.map((data) => {
      const { id, weight, height, name, life_span, temperament, image } = data;
      return {
        id,
        name,
        weight: weight.metric,
        height: height.metric,
        life_span,
        temperaments: temperament?.split(", "),
        image: image.url,
      };
    });
    return apiData;
  };

  getBreedDbData = async () => {
    return await Breed.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  };

  getAllData = async () => {
    const apiData = await this.getApiData();
    const dbData = await this.getBreedDbData();
    const dbTempFil = await dbData?.map((breed) => {
      let { id, name, height, weight, life_span, image, createInDb } = breed;
      return {
        id,
        name,
        height,
        weight,
        life_span,
        image,
        createInDb,
        temperaments: breed.temperaments?.map((temp) => {
          return temp.name;
        }),
      };
    });
    const allData = apiData.concat(dbTempFil);
    return allData;
  };

  //with Async Await
  getDbData = async (req, res, next) => {
    let data = await this.model.findAll().catch((err) => {
      next(err);
    });
    res.send(data);
  };

  //with Promises
  // getDbData = (req, res, next) => {
  //   this.model
  //     .findAll()
  //     .then((temp) => res.send(temp))
  //     .catch((error) => {
  //       next(error);
  //     });
  // };
}

const MainController = new ModelController();
module.exports = {
  MainController,
  ModelController,
};
