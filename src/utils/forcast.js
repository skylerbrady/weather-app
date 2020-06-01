const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=171fc349a70132b48e44d57e4a53c540&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degrees, and wind speed is " +
          body.current.wind_speed +
          " km/h , with a Humidity of " +
          body.current.humidity +
          "%"
      );
    }
  });
};
module.exports = forecast;

// Below code demonstrate the making http request without using third party package ie Request

// const http = require("http");
// const url =
//   "http://api.weatherstack.com/current?access_key=171fc349a70132b48e44d57e4a53c540&query=37.8267,-122.4233";
// const request = http.request(url, (Response) => {
//   let data = "";
//   Response.on("data", (chunk) => {
//     data = data + chunk.toString();
//   });
//   Response.on("end", () => {
//     const body = JSON.parse(data);
//     console.log(body);
//   });
// });
// request.on("error", (error) => {
//   console.log("Unable to connect weather service", error);
// });
// request.end();
