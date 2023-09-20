// makj0005

// API_key
let API_key = '08d12f3f2d447c86eae6139865e577ce';
/* Weather by city name from API:
 https://api.openweathermap.org/data/2.5/weather?q=${country_name}&units=metric&appid=${API_key} */

// Declare const elements from HTML into Javascript with CSS querySelector
const inputTextElement = document.querySelector(".search-input");
const cityNameElement = document.querySelector(".city-name");
const temperatureElement = document.querySelector(".temp");

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

                // Update HTML elements and reset text input element
                cityNameElement.innerHTML = cityName;
                temperatureElement.innerHTML = `${Math.round(cityTemperature)}°C`;
                inputTextElement.value = "";
            })
            .catch(error => {
                alert(`"${inputTrim}" is not a valid input - try again!`); // error for user
                console.log('Something went wrong: ' + error); // error for dev in console
            });
    }
}

// Added event listener for Enter key press on the input field
// NOTE: The button has onclick() method in html)
inputTextElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchCity();
    }
});