// makj0005

// Personal API_key
let API_key = '08d12f3f2d447c86eae6139865e577ce';
// Weather by city name from API: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// Declare const elements from HTML into Javascript with CSS querySelector
const inputTextElement = document.querySelector(".search-input");
const cityNameElement = document.querySelector(".city-name");
const temperatureElement = document.querySelector(".temp");

// Onclick function for button
function searchCity(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputTextElement.value}&units=metric&appid=${API_key}`)
        .then(response => response.json())
        .then((weather) => {
            cityNameElement.innerHTML = `${weather.name}`;
            temperatureElement.innerHTML = `${weather.main.temp}°C`;
        })
        .catch(error => alert('Something went wrong: ' + error));
}

