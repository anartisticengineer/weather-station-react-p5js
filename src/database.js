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
  let initialResults = this.cityNames.filter((city) => regEx.test(city));
  this.cityResults = this.filterAmbiguous(initialResults);
  return this.cityResults;
};
//corresponding IDs
DataBase.prototype.getResultsAsIds = function () {
  let idsIndex = 0;
  let idResults = [];
  for (
    let resultsIndex = 0;
    resultsIndex < this.cityResults.length;
    resultsIndex++
  ) {
    idsIndex = this.cityNames.indexOf(this.cityResults[resultsIndex]);
    idResults.push(this.cityIds[idsIndex]);
    idsIndex++; //to avoid potential ambiguity
  }
  return idResults;
};

DataBase.prototype.filterAmbiguous = function (arrayIn) {
  let arrayOut = [];
  for (let index = 0; index < arrayIn.length; index++) {
    let a_i = arrayIn[index];
    if (!arrayOut.includes(a_i)) {
      arrayOut.push(a_i); //not already in array, so put it in there
    } else {
      continue;
    }
  }
  return arrayOut;
};
