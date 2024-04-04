const { RESTDataSource } = require("@apollo/datasource-rest");
const { API_KEY } = require("../../config");

class MetObsAPI extends RESTDataSource {
  baseURL = "http://api.weatherapi.com/v1/";

  getCurrentByLocation(location) {
    return this.get(`current.json?q=${location}&key=${API_KEY}`);
  }

  getSuggestionsByText(text) {
    return this.get(`search.json?q=${text}&key=${API_KEY}`);
  }
}

module.exports = MetObsAPI;
