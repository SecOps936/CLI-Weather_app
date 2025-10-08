import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 4000;

// Allow requests from frontend
app.use(cors());

const API_KEY = "c31043019b8f8f93b9dd0e480186cbf5";

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
