const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const errorDiv = document.getElementById("error");
const BACKEND_URL = "http://localhost:4000/weather";
searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    try {
        // Show loading
        errorDiv.classList.add("d-none");
        resultDiv.classList.add("d-none");
        tempEl.textContent = "Loading...";
        resultDiv.classList.remove("d-none");
        const response = await fetch(`${BACKEND_URL}?city=${encodeURIComponent(city)}`);
        if (!response.ok)
            throw new Error("City not found");
        const data = await response.json();
        cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
        tempEl.textContent = `🌡 ${data.main.temp} °C`;
        descEl.textContent = `☁ ${data.weather[0].description}`;
    }
    catch (error) {
        resultDiv.classList.add("d-none");
        errorDiv.textContent = `⚠ ${error.message}`;
        errorDiv.classList.remove("d-none");
    }
});
export {};
