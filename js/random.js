const quotesArray = [
  {
    id: 1,
    name: 'Unknown',
    quotes: 'If people are talking behind your back, then just fart',
  },
  {
    id: 2,
    name: 'Bill Murray',
    quotes: "Whatever you do, always give 100%. Unless you're donating blood",
  },
  {
    id: 3,
    name: 'Tupac',
    quotes:
      'Whatever you see, through all the rain and pain, You gotta keep a sense of humor. Gotta be able to smile through all this bullshit',
  },
  {
    id: 4,
    name: 'Betty Reese',
    quotes:
      'If you think, you are too small to be effective, you have never been in dark with mosquitos',
  },
  {
    id: 5,
    name: 'Unknown',
    quotes: 'Life is too short, smile while you still have teeth',
  },
];

// Add random quotes & change every refresh
let quotes = document.querySelector('.random-quotes');
let quoter = document.querySelector('.quoter');

let randomQuotes = Math.floor(Math.random() * quotesArray.length);

quotes.textContent = quotesArray[randomQuotes].quotes;
quoter.textContent = quotesArray[randomQuotes].name;

// Add random quotes & change every 1 minute
let backgroundArray = [
  {
    id: 1,
    name: 'tobias-bjørkli',
    img: "url('./images/tobias-bjorkli.jpg')",
  },
  {
    id: 2,
    name: 'Collin Lloyd',
    img: "url('./images/colin-lloyd.jpg')",
  },
  {
    id: 3,
    name: 'Adi Perets',
    img: "url('./images/adi-perets.jpg')",
  },
];

let randomBackground = Math.floor(Math.random() * backgroundArray.length);

function changeBackground() {
  document.body.style.backgroundImage = backgroundArray[randomBackground].img;
  console.log('hello world');
}
