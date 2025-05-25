const currentTemp = document.querySelector("#current-temperature");
const descriptionTemp = document.querySelector("#weather-description");
const forecastTemp = document.querySelector("#forecast");
const highTemp = document.querySelector("#high");
const lowHigh = document.querySelector("#low");
const humidityEl = document.querySelector("#humidity");

const apiKey = "499d5fdfcd23c04c4ac39776c9f14f98"; // Reemplaza esto
const lat = -45.57;
const lon = -72.06;
const urlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch(){
    try{
        const response = await fetch(urlWeather);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
            console.log(data);
        }else{
            throw new Error('Network response was not ok');
        } 
    }catch(error){
        console.error('Error xD: ', error);
    }
}

apiFetch();
function displayResults(data) {
    descriptionTemp.textContent = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    highTemp.textContent = data.main.temp_max;
    lowHigh.textContent = data.main.temp_min;
    humidityEl.textContent = data.main.humidity;
    //myGraphic.setAttribute('SRC', iconsrc);
    //myGraphic.setAttribute("alt", data.weather[0].description);
}