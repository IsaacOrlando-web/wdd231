// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York","Sacramento","Cleveland","South Bend","Tampa Bay","Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
		//weekday: "short",
		day: "numeric",
		month: "long",
		year: "numeric"
	};

// Question #1
today1.innerHTML = new Date().toLocaleDateString("en-US", options);

// Question #2
today2.innerHTML = `<strong>Volume</strong> ${volume} liters`;

// Question #3
let quantity = document.querySelector("#q").value;

// Question #4
document.querySelector('aside').innerHTML = 'Welcome to <em>our</em> neighborhood!'


// Question #5
document.querySelector("#temp").value = getCelsius(33);

// Question #6
const divs = document.querySelectorAll('div');
// Question #7
//Filter an array named citynames to return only city names in the array that start with the letter "C" and store the resulting array into a variable named filterC. Output to the provided div element with an id of "c-names".
const filterC = citynames.filter(city => city.startsWith("C"));
document.querySelector("#c-names").innerHTML = filterC.join(", ");