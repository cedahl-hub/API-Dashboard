const dogOutput = document.getElementById("dog-output");
const catOutput = document.getElementById("cat-output");
const weatherOutput = document.getElementById("weather-output");
const currencyOutput = document.getElementById("currency-output");
const moviesOutput = document.getElementById("movies-output");
const githubOutput = document.getElementById("github-output");
const jokeOutput = document.getElementById("joke-output");
const publicOutput = document.getElementById("publicapi-output");

async function getDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    dogOutput.innerHTML = "";
    const img = document.createElement("img");
    img.src = data.message;
    dogOutput.appendChild(img);
  } catch (error) {
    dogOutput.textContent = "Failed to fetch dog image.";
  }
}
async function getCatImage() {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    catOutput.innerHTML = "";
    const img = document.createElement("img");
    img.src = data[0].url;
    catOutput.appendChild(img);
  } catch (error) {
    catOutput.textContent = "Failed to fetch cat image.";
  }
}

async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=32.7763&longitude=-79.9327&hourly=temperature_2m,apparent_temperature,uv_index&models=gfs_seamless&forecast_days=3&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    weatherOutput.innerHTML = "";
    weatherOutput.innerHTML = `In Charleston, SC, the temperature is <strong>${data.hourly.temperature_2m[0]}°F</strong>, but it feels like <strong>${data.hourly.apparent_temperature[0]}°F</strong>.`;
  } catch (error) {
    weatherOutput.innerHTML = "Failed to fetch weather data.";
  }
}

async function getExchangeRates() {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/0e7410d51e5c99f01c834393/latest/USD"
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    currencyOutput.innerHTML = "";
    currencyOutput.innerHTML = `<strong>1</strong> U.S. dollar is equal to <strong>${data.conversion_rates.DKK}</strong> Danish kroner.`;
  } catch (error) {
    currencyOutput.innerHTML = "Failed to fetch exchange rates.";
  }
}

async function getMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjMyMTUwZTRkODllYWU0NWI0MGFhM2U4ZmM1YWYxOCIsIm5iZiI6MTc1Mzc0NjExMS42NTUsInN1YiI6IjY4ODgwYWJmNjVmMDgwN2U1OWQ5YmY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ubtm6WnHBt3s7E0vkwE_dHfzDqft86P7CX6dGAQAy54",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    moviesOutput.innerHTML = "";
    if (Array.isArray(data.results)) {
      const titles = data.results.map((movie) => movie.title).join("<br>");
      moviesOutput.innerHTML = `<strong>Trending movies</strong>:<br>${titles}`;
    } else {
      moviesOutput.textContent = "No trending movies found.";
    }
  } catch (error) {
    moviesOutput.textContent = "Failed to fetch trending movies.";
  }
}

async function getGitHubUser() {
  try {
    const response = await fetch("https://api.github.com/users/cedahl-hub");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    githubOutput.innerHTML = "";
    githubOutput.innerHTML = `GitHub user <strong>${data.login}</strong> has ${data.public_repos} public repos.`;
  } catch (error) {
    githubOutput.innerHTML = "Failed to fetch GitHub user data.";
  }
}

async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    jokeOutput.textContent = "";
    jokeOutput.textContent = data.joke;
  } catch (error) {
    jokeOutput.textContent = "Failed to fetch a joke.";
  }
}

async function getPublicApiInfo() {
  try {
    const response = await fetch("https://randomfox.ca/floof/");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    publicOutput.innerHTML = "";
    const img = document.createElement("img");
    img.src = data.image;
    publicOutput.appendChild(img);
  } catch (error) {
    publicOutput.textContent = "Failed to fetch random fox image.";
  }
}
