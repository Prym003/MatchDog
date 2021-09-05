const { ModelController } = require("./index");
const { Breed } = require("../models/index");

class BreedModel extends ModelController {
  constructor(model) {
    super(model);
  }

  getAllDogsOrName = async (req, res, next) => {
    const name = req.query.name;
    let allBreeds = await this.getAllData().catch((err) => {
      next(err);
    });
    if (name) {
      let breedName = allBreeds.filter((breed) => {
        return breed.name.toLowerCase().includes(name.toLowerCase());
      });
      breedName.length
        ? res.status(200).send(breedName)
        : res.status(404).send(`${name} not found`);
    } else {
      res.status(200).send(allBreeds);
    }
  };

  getDogsById = async (req, res, next) => {
    const id = req.params.id;
    let allBreeds = await this.getAllData().catch((err) => {
      next(err);
    });
    let filteredBreedsById = await allBreeds.filter(
      (breed) => breed.id.toString() === id.toString()
    );
    filteredBreedsById.length
      ? res.status(200).send(filteredBreedsById)
      : res.status(404).send("Breed not found");
  };
}

const BreedController = new BreedModel(Breed);

module.exports = BreedController;
