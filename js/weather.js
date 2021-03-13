function askLocation() {
  navigator.geolocation.getCurrentPosition(allowed, ignored);
}

function allowed(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  fetchWeather(lat, lon);
}

function fetchWeather(lat, lon) {
  let APIKey = '9d6d1f9449a6ca9bea8a56d9917534a5';
  let unit = 'metric';
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${unit}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let temp = data.main.temp;
      let place = data.name;
      let icon = data.weather[0].icon;
      setWeather(temp, place, icon);
    })
    .catch((error) => {
      console.log('Request failed');
    });
}

let myTemp = document.querySelector('.user-temp');
let myPlace = document.querySelector('.user-location');
let myIcon = document.querySelector('.weatherIcon');
let weatherdiv = document.querySelector('.weather');

function setWeather(temp, place, icon) {
  myTemp.textContent = temp + '°C';
  myPlace.textContent = place;

  myIcon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}.png`);
}

function ignored() {
  weatherdiv.style.display = 'none';
}

askLocation();
