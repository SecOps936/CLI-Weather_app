const searchBtn = document.getElementById("searchBtn") as HTMLButtonElement;
const cityInput = document.getElementById("city") as HTMLInputElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;
const cityNameEl = document.getElementById("cityName") as HTMLHeadingElement;
const tempEl = document.getElementById("temp") as HTMLParagraphElement;
const descEl = document.getElementById("desc") as HTMLParagraphElement;
const errorDiv = document.getElementById("error") as HTMLDivElement;

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
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
    tempEl.textContent = `🌡 ${data.main.temp} °C`;
    descEl.textContent = `☁ ${data.weather[0].description}`;

  } catch (error: any) {
    resultDiv.classList.add("d-none");
    errorDiv.textContent = `⚠ ${error.message}`;
    errorDiv.classList.remove("d-none");
  }
});

