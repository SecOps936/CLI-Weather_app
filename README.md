# 🌤 Weather App

A **modern, responsive weather application** built with **TypeScript**, **Node.js**, and **Bootstrap 5**.  
It fetches live weather data from the **OpenWeatherMap API** and displays it in a clean, user-friendly interface.

---

## 🚀 Features

- Fetch weather by **city name**
- Shows:
  - City & country
  - Temperature in Celsius
  - Weather description with icon
- Responsive UI for desktop and mobile
- Error handling for invalid cities or API errors
- CLI & frontend UI versions
- Backend proxy hides API key

---

## 🛠 Technologies Used
Frontend: The user interface is built with HTML5 for structure,
CSS3 for styling and layout, Bootstrap 5 for responsive design and pre-built components, and 
TypeScript for type-safe JavaScript development.

Backend: The server is built with Node.js and Express.js, which handles requests from the frontend. 
The backend also uses node-fetch to fetch data from the OpenWeatherMap API securely, so the API key is not exposed to the frontend.

Development Tools: We use npm for dependency management and scripts, 
TypeScript compiler (tsc) to convert .ts files into .js, and lite-server to run a lightweight frontend server with live reload during development.

Data: The app fetches JSON data from OpenWeatherMap API and parses it to show meaningful information like temperature, city name, and weather description.
---

