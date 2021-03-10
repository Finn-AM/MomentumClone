let userInput = document.querySelector('#user-input');
let input = document.querySelector('.input-form');
const inputContainer = document.querySelector('.scene-container');
let greetText = document.querySelector('.greeting-text');
let todayTime = document.querySelector('.time-content');
input.addEventListener('submit', getName);

function getName(e) {
  e.preventDefault();
  let name = userInput.value;
  name = [...name][0].toUpperCase() + [...name].slice(1).join('').toLowerCase();

  if (name !== '') {
    inputContainer.classList.add('hide');
    greetText.innerText = `Good Morning, ${name}`;
    getTime(name);
    changeBackground();
  } else {
    // alert('empty');
    return;
  }
}

function getTime(name) {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();

  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;
  todayTime.innerText = `${hours}:${minutes}`;

  // Greetings

  if (hours > 12) greetText.innerText = `Good Evening, ${name}`;
  else if (hours >= 18) greetText.innerText = `Good Evening, ${name}`;
  else return;
}

// Make sure it's changing time
setInterval(getTime(name), 1000);

// links top left
let link = document.querySelector('.link');
let linkContainer = document.querySelector('.link-expand');

link.addEventListener('click', () => {
  linkContainer.classList.toggle('show');
});

// searching google

let search = document.querySelector('.form-link');
let searchInput = document.querySelector('.searchInput');

search.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  window.open(`https://www.google.com/search?q=${query}`, '__blank');
  // window.location.assign()
});

let magnifier = document.querySelector('.magnifier');

magnifier.addEventListener('click', () => {
  searchInput.focus();
});
