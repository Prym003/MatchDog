const { ModelController } = require("./index");
const { Temperament } = require("../models/index");

class TemperamentModel extends ModelController {
  constructor(model) {
    super(model);
  }
  chargeTempApiToDb = async () => {
    let allData = await this.getApiData();
    let alltemps = [];
    allData.map((el) => {
      let elTemp = el.temperament;
      if(elTemp !== undefined){
      for (let i = 0; i < elTemp.length; i++) {
        let tem = el.temperament[i];
        if (!alltemps.includes(tem)) {
          alltemps.push(tem);
        }}
      }
    });
       alltemps.forEach((temp) => {
        this.model.findOrCreate({
          where: { name: temp },
        });
      });
  };
}

const TemperamentController = new TemperamentModel(Temperament);

module.exports = TemperamentController;
