const dogAPI = document.getElementById("dog-api");
const dogOutput = document.getElementById("dog-output");
const catAPI = document.getElementById("cat-api");
const catOutput = document.getElementById("cat-output");
const weatherAPI = document.getElementById("weather-api");
const weatherOutput = document.getElementById("weather-output");
const currencyAPI = document.getElementById("currency-api");
const currencyOutput = document.getElementById("currency-output");
const moviesAPI = document.getElementById("movies-api");
const moviesOutput = document.getElementById("movies-output");
const githubAPI = document.getElementById("github-api");
const githubOutput = document.getElementById("github-output");
const jokeAPI = document.getElementById("joke-api");
const jokeOutput = document.getElementById("joke-output");
const publicAPI = document.getElementById("public-api");
const publicOutput = document.getElementById("publicapi-output");

async function getDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  dogOutput.innerHTML = "";
  const img = document.createElement("img");
  img.src = data.message;
  dogOutput.appendChild(img);
}
async function getCatImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  catOutput.innerHTML = "";
  const img = document.createElement("img");
  img.src = data[0].url;
  catOutput.appendChild(img);
}
async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=32.7763&longitude=-79.9327&hourly=temperature_2m,apparent_temperature,uv_index&models=gfs_seamless&forecast_days=3&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit"
  );
  const data = await response.json();
  weatherOutput.textContent = "";
  weatherOutput.textContent = `In Charleston, SC, the temperature is ${data.hourly.temperature_2m[0]}°F, but it feels like ${data.hourly.apparent_temperature[0]}°F.`;
}
async function getExchangeRates() {
  const response = await fetch(
    "https://v6.exchangerate-api.com/v6/0e7410d51e5c99f01c834393/latest/USD"
  );
  const data = await response.json();
  currencyOutput.textContent = "";
  currencyOutput.textContent = `1 U.S. dollar is equal to ${data.conversion_rates.DKK} Danish kroner.`;
}
async function getMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjMyMTUwZTRkODllYWU0NWI0MGFhM2U4ZmM1YWYxOCIsIm5iZiI6MTc1Mzc0NjExMS42NTUsInN1YiI6IjY4ODgwYWJmNjVmMDgwN2U1OWQ5YmY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ubtm6WnHBt3s7E0vkwE_dHfzDqft86P7CX6dGAQAy54",
    },
  };
  await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  moviesOutput.innerHTML = "";
  moviesOutput.textContent = `Trending movies: ${data.results.title}`;
}
async function getGitHubUser() {
  const response = await fetch("https://api.github.com/users/cedahl-hub");
  const data = await response.json();
  githubOutput.textContent = "";
  githubOutput.textContent = `GitHub user ${data.login} has ${data.public_repos} public repos.`;
}
async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  jokeOutput.textContent = "";
  jokeOutput.textContent = data.joke;
}
async function getPublicApiInfo() {
  const response = await fetch("https://randomfox.ca/floof/");
  const data = await response.json();
  publicOutput.innerHTML = "";
  const img = document.createElement("img");
  img.src = data.image;
  publicOutput.appendChild(img);
}
