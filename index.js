import fetch from "node-fetch"; // import fetch in Node.js

const API_KEY = "c31043019b8f8f93b9dd0e480186cbf5"; // Replace with your OpenWeatherMap API key
const city = process.argv[2]; // Pass city from command line: node index.js Dodoma

if (!city) {
  console.log("❗ Please provide a city name. Example:");
  console.log("   node index.js Dodoma");
  process.exit(1);
}

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    console.log(`\n🌍 Weather in ${data.name}, ${data.sys.country}:`);
    console.log(`🌡️  Temperature: ${data.main.temp} °C`);
    console.log(`💧 Humidity: ${data.main.humidity}%`);
    console.log(`☁️  Condition: ${data.weather[0].description}`);
    console.log(`🌬️  Wind Speed: ${data.wind.speed} m/s\n`);
  } catch (error) {
    console.error("⚠️  Failed to fetch weather data:", error.message);
  }
}

getWeather(city);
