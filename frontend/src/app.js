"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiKey = "c31043019b8f8f93b9dd0e480186cbf5";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const errorDiv = document.getElementById("error");
searchBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name!");
        return;
    }
    try {
        errorDiv.classList.add("d-none");
        resultDiv.classList.add("d-none");
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok)
            throw new Error("City not found");
        const data = yield response.json();
        cityNameEl.textContent = `${data.name}, ${data.sys.country}`;
        tempEl.textContent = `🌡 ${data.main.temp} °C`;
        descEl.textContent = `☁ ${data.weather[0].description}`;
        resultDiv.classList.remove("d-none");
    }
    catch (error) {
        errorDiv.classList.remove("d-none");
    }
}));
