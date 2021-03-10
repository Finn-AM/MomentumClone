function getUserCity() {
  fetch('http://ip-api.com/json')
    .then((res) => res.json())
    .then((response) => {
      const city = response.city;
      console.log(response);
      fetchWeather(city);
    })
    .catch((error) => {
      console.log('Request failed');
    });
}

function fetchWeather(city) {
  let APIKey = '9d6d1f9449a6ca9bea8a56d9917534a5';
  let unit = 'metric';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=${unit}`;

  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let temp = data.main.temp;
      let place = data.name;
      let icon = data.weather[0].icon;
      dudung(temp, place, icon);
      console.log(temp, icon, place);
    })
    .catch((error) => {
      console.log('Request failed');
    });
}

let myTemp = document.querySelector('.user-temp');
let myPlace = document.querySelector('.user-location');
let myIcon = document.querySelector('.weatherIcon');

function dudung(temp, place, icon) {
  myTemp.textContent = temp + '°C';
  myPlace.textContent = place;
  myIcon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}.png`);
}

getUserCity();
