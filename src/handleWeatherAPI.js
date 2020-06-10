class WeatherAPI {
  constructor(cityId, units = "metric") {
    let urlMain = "http://api.openweathermap.org/data/2.5/weather?";
    let urlCityId = "id=" + cityId;
    let urlAppId = "&appid=YOUR_API_KEY";
    let urlUnits = "&units=" + units;
    this.url = urlMain + urlCityId + urlAppId + urlUnits;
  }
}

WeatherAPI.prototype.urlOut = function () {
  return this.url;
};

export default WeatherAPI;
