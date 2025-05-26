const currentTemp = document.querySelector("#current-temperature");
const descriptionTemp = document.querySelector("#weather-description");
const highTemp = document.querySelector("#high");
const lowHigh = document.querySelector("#low");
const humidityEl = document.querySelector("#humidity");
const weatherIcon = document.querySelector(".weather-img");
const tempToday = document.querySelector("#today");
const tempinOneDay = document.querySelector("#oneDay");
const tempinTwoDays = document.querySelector("#twoDays");

const urlWeather = "https://api.openweathermap.org/data/3.0/onecall?lat=-45.57&lon=-72.06&exclude=current&appid=499d5fdfcd23c04c4ac39776c9f14f98";

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
    //Current Weather(today = index 0)
    currentTemp.innerHTML = `${data.daily[0].temp.day}&deg;F`;
    descriptionTemp.textContent = data.daily[0].weather[0].description;
    highTemp.textContent = data.daily[0].temp.max;
    lowHigh.textContent = data.daily[0].temp.min;
    humidityEl.textContent = data.daily[0].humidity;
    const iconCode = data.daily[0].weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);

    //Forecast 3 days
    tempToday.textContent = data.daily[0].temp.day;
    tempinOneDay.textContent = data.daily[1].temp.day;
    tempinTwoDays.textContent = data.daily[2].temp.day;
    //myGraphic.setAttribute('SRC', iconsrc);
    //myGraphic.setAttribute("alt", data.weather[0].description);
}