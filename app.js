//use fetch api to access the quote

const quotes = [
  {
    "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    "author": "Ayn Rand",
    "category": "Famous"
  },
  {
    "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
    "author": "A. J. Liebling",
    "category": "Famous"
  },
  {
    "quote": "This book fills a much-needed gap.",
    "author": "Moses Hadas in a review",
    "category": "Famous"
  },
  {
    "quote": "A mathematician is a device for turning coffee into theorems.",
    "author": "Paul Erdos",
    "category": "Famous"
  },
  {
    "quote": "The only difference between me and a madman is that I'm not mad.",
    "author": "Salvador Dali",
    "category": "Famous"
  },
  {
    "quote": "Never interrupt your enemy when he is making a mistake.",
    "author": "Napoleon Bonaparte",
    "category": "Famous"
  },
  {
    "quote": "If you are going through hell, keep going.",
    "author": "Sir Winston Churchill ",
    "category": "Famous"
  },
  {
    "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
    "author": "Friedrich Nietzsche",
    "category": "Famous"
  },
  {
    "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
    "author": "Frank Lloyd Wright",
    "category": "Famous"
  },
  {
    "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
    "author": "Sir Winston Churchill",
    "category": "Famous"
  }
];




const quoteButton = document.getElementById('new-quote');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
//intial quote to show when you see the web page
quote.prepend(quotes[0].quote);
author.prepend(quotes[0].author);

//eventListener to change quote on clicking the button
quoteButton.addEventListener('click',changeQuote);

function changeQuote(e){
    let randomInt = Math.floor(Math.random() * Math.floor(quotes.length));
    quote.innerHTML = quotes[randomInt].quote;
    author.innerHTML = (quotes[randomInt].author);
}


