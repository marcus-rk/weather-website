// makj0005

// Personal API_key
let API_key = '08d12f3f2d447c86eae6139865e577ce';
/* Weather by city name from API:
 https://api.openweathermap.org/data/2.5/weather?q=${country_name}&units=metric&appid=${API_key} */

// Declare const elements from HTML into Javascript with CSS querySelector
const inputTextElement = document.querySelector(".search-input");
const cityNameElement = document.querySelector(".city-name");
const temperatureElement = document.querySelector(".temp");
const searchButton = document.querySelector(".search-button");

// Function to search for city weather data
function searchCity() {
    if (inputTextElement.value !== "") {
        const inputTrim = inputTextElement.value.trim() // allows for miss press spaces

        // Use the fetch API to make a GET request to the OpenWeatherMap API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputTrim}&units=metric&appid=${API_key}`)
            .then(response => response.json()) // Parse the response as JSON
            .then((weather) => {
                const cityName = weather.name;
                const cityTemperature = weather.main.temp;

                // update HTML elements or alert if input is not valid
                if (cityName !== 'undefined') {
                    cityNameElement.innerHTML = cityName;
                    temperatureElement.innerHTML = `${Math.round(cityTemperature)}°C`;
                } else {
                    alert(`"${inputTextElement.value}" is not a valid input - try again!`)
                }

                // Resetting text input field to placeholder text
                inputTextElement.value = "";
            })
            .catch(error => alert('Something went wrong: ' + error));
    }
}

// Added event listener for button click and Enter key press on the input field
searchButton.addEventListener("click", function () {
    searchCity();
});
inputTextElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchCity();
    }
});
