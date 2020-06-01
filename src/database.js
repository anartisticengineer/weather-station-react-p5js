//to handle all city data
import CityData from "./city.list.min.json";

export default class DataBase {
  constructor() {
    this.cityIds = CityData.map((city) => city.id);
    this.cityNames = CityData.map((city) => city.name);
    this.cityResults = [];
  }
}

DataBase.prototype.getResults = function (cityNameIn) {
  let regEx = new RegExp(cityNameIn, "i");
  this.cityResults = this.cityNames.filter((city) => regEx.test(city));
  return this.cityResults;
};
DataBase.prototype.getResultsAsIds = function () {
  let idsIndex = 0;
  let idResults = [];
  for (
    let resultsIndex = 0;
    resultsIndex < this.cityResults.length;
    resultsIndex++
  ) {
    idsIndex = this.cityResults.indexOf(this.cityResults[resultsIndex]);
    idResults.push(this.cityIds[idsIndex]);
    idsIndex++; //to avoid potential ambiguity
  }
  return idResults;
};
