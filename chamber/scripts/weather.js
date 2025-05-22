const currentWeatherElement = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={84ac111db0575ac579b14d913a849da7}";

async function getData(){
    try{
        const response = await fetch(url);
        if(!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error('Error xD: ', error);
    }
}

getData();