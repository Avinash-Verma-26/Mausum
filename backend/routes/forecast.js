const express = require("express");
const router = express.Router();
const axios = require("axios");
const { unixToTime } = require("../utilities/timeConvertors");
const {
  kelvinToCelcius,
  kelvinToFarenheit,
} = require("../utilities/tempConvertors");

const key = process.env.WEATHER_API_KEY;
console.log(key);

router.get("/", async (req, res) => {
  const lat = 42.37197022339334;
  const long = -71.09238153912857;
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${key}`;
  try {
    const result = await axios.get(url);
    const date = new Date().toLocaleString().split(",")[0];
    const forecast = result.data;
    const sunrise = unixToTime(forecast.current.sunrise * 1000);
    const sunset = unixToTime(forecast.current.sunset * 1000);
    const temp = forecast.current.temp;
    const tempC = kelvinToCelcius(temp);
    const tempF = kelvinToFarenheit(temp);
    const feelLike = forecast.current.feels_like;
    const feelC = kelvinToCelcius(feelLike);
    const feelF = kelvinToFarenheit(feelLike);
    res.send({
      Date: date,
      Sunrise: sunrise,
      Sunset: sunset,
      Temperature: `${tempC} °C  --  ${tempF} °F`,
      Feels_Like: `${feelC} °C  --  ${feelF} °F`,
    });
  } catch (error) {
    console.error("API call failed:", error.message);
    res.status(500).send({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;
