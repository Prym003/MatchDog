const { Breed, Temperament } = require("../models/index");
const axios = require("axios");

//
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
        temperament: temperament?.split(", "),
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
    const allData = apiData.concat(dbData);
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

  createDbData = (req, res, next) => {
    const element = req.body;
    this.model
      .create(element)
      .then((element) => res.send(element))
      .catch((error) => {
        next(error);
      });
  };
}

const MainController = new ModelController();
module.exports = {
  MainController,
  ModelController,
};
