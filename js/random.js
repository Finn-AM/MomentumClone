const quotesArray = [
  {
    id: 1,
    name: '~ Unknown',
    quotes: `"If people are talking behind your back, then just fart"`,
  },
  {
    id: 2,
    name: '~ Bill Murray',
    quotes: `"Whatever you do, always give 100%. Unless you're donating blood"`,
  },
  {
    id: 3,
    name: '~ Tupac',
    quotes: `"Whatever you see, through all the rain and pain, You gotta keep a sense of humor. Gotta be able to smile through all this bullshit"`,
  },
  {
    id: 4,
    name: '~ Betty Reese',
    quotes: `"If you think, you are too small to be effective, you have never been in dark with mosquitos"`,
  },
  {
    id: 5,
    name: '~ Unknown',
    quotes: `"Life is too short, smile while you still have teeth"`,
  },
];

// Add random quotes & change every refresh
let quotes = document.querySelector('.random-quotes');
let quoter = document.querySelector('.quoter');

let randomQuotes = Math.floor(Math.random() * quotesArray.length);

quotes.textContent = quotesArray[randomQuotes].quotes;
quoter.textContent = quotesArray[randomQuotes].name;

let backgroundArray = [
  {
    id: 1,
    name: 'tobias-bjørkli',
    img: "url('./images/tobias-bjorkli.jpg')",
    url: 'https://www.pexels.com/id-id/foto/aurora-lights-1693095/',
  },
  {
    id: 2,
    name: 'Collin Lloyd',
    img: "url('./images/colin-lloyd.jpg')",
    url:
      'https://www.pexels.com/photo/silhouette-of-mountain-under-starry-night-5195918/',
  },
  {
    id: 3,
    name: 'Adi Perets',
    img: "url('./images/adi-perets.jpg')",
    url:
      'https://www.pexels.com/photo/brown-rocky-mountain-under-starry-night-5103756/',
  },
];

// Add random awesome background
let randomBackground = Math.floor(Math.random() * backgroundArray.length);
let photographer = document.querySelector('.photographer');
let source = document.querySelector('.img-link');

function changeBackground() {
  document.body.style.backgroundImage = backgroundArray[randomBackground].img;
  photographer.textContent = backgroundArray[randomBackground].name;
  source.setAttribute('href', backgroundArray[randomBackground].url);
  console.log("hello world, if you seeing this, you're awesome ");
  document.body.animate([{ opacity: '0.1' }, { opacity: '1' }], {
    duration: 1000,
    fill: 'forwards',
  });
}
