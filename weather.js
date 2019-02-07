const COORDS_LS = 'coords';
const API_KEY = '5c552a851da721b8a4ada0586b055a04';

const weatherDOM = document.querySelector('.js-weather');
const cityDOM = document.querySelector('.js-city');
const getWeather = (lat, lon) => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appId=${API_KEY}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			const temperature = json.main.temp;
			const place = json.name;

			weatherDOM.innerText = `${temperature}°`;
			cityDOM.innerText = `${place}`;
		});
};

const saveCoords = (coordsObj) => {
	console.log(coordsObj);
	localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
};

const handleGeoSucces = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;

	const coordsObj = {
		latitude,
		longitude
	};

	saveCoords(coordsObj);
	getWeather(latitude, longitude);
};

const handleGeoError = (error) => {
	console.log("Can't access geo position");
};

const askForCoords = () => {
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
};

const loadCoords = () => {
	const loadedCoords = localStorage.getItem(COORDS_LS);
	if (loadedCoords === null) {
		askForCoords();
	} else {
		console.log(loadedCoords);
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
};

const init = () => {
	loadCoords();
};

init();