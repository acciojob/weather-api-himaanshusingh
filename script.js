//your JS code here. If required.
const getWeather = document.querySelector(".getWeather");
const weatherData = document.querySelector("#weatherData");

getWeather.onclick = async function () {
  const city = "London,uk";
  const apiKey = "e467712b257e418838be97cc881a71de";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const weather = data.weather[0].main;
    weatherData.innerText = `Current weather in London: ${weather}`;
  } catch (error) {
    weatherData.innerText = `Error fetching weather data: ${error.message}`;
  }
};