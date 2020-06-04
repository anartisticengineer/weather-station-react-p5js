class WeatherAPI {
  constructor(cityId, units = "metric") {
    let urlMain = "http://api.openweathermap.org/data/2.5/weather?";
    let urlCityId = "id=" + cityId;
    let urlAppId = "&appid=YOUR_API_KEY";
    let urlUnits = "&units=" + units;
    this.url = urlMain + urlCityId + urlAppId + urlUnits;
  }
}

WeatherAPI.prototype.getJSON = function () {
  fetch(this.url)
    .then((res) => res.json())
    .then((out) => {
      console.log("OUTPUT", out);
    })
    .catch((err) => console.error(err));
};

export default WeatherAPI;
