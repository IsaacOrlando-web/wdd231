const myTown = document.querySelector("#town");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#temperature");
const myGraphic = document.querySelector("#grapgic");



const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.748&lon=6.637&units=metric&appid=84ac111db0575ac579b14d913a849da7";

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        }else{
            throw new Error('Network response was not ok');
        } 
    }catch(error){
        console.error('Error xD: ', error);
    }
}

apiFetch();

function displayResults(data) {
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute("alt", data.weather[0].description);
}

