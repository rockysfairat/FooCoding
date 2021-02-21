'use strict';

const bookTitles = [
    'hyperion_dan_simmons',
    'the_fall_of_hyperion_dan_simmons',
    'endymion_dan_simmons',
    'the_rise_of_endymion_dan_simmons',
    'unsong_scott_alexander',
    'the_almost_nearly_perfect_people_michael_booth',
    'himmelstrand_john_ajvide_lindqvist',
    'Rörelsen_john_ajvide_lindqvist',
    'x_john_ajvide_lindqvist',
    'un_lun_dun_china_miéville'
  ];

const Books = {

  'hyperion_dan_simmons': {
    title: 'Hyperion',
    author: 'Dan Simmons',
    language: 'English'
  },

  'the_fall_of_hyperion_dan_simmons': {
    title: 'The Fall Of Hyperion',
    author: 'Dan Simmons',
    language: 'English'
  },

  'endymion_dan_simmons': {
    title: 'Endymion',
    author: 'Dan Simmons',
    language: 'English'
  },

  'the_rise_of_endymion_dan_simmons': {
    title: 'The Rise Of Endymion',
    author: 'Dan Simmons',
    language: 'English'
  },

  'unsong_scott_alexander': {
    title: 'Unsong',
    author: 'Scott Alexander',
    language: 'English'
  },

  'the_almost_nearly_perfect_people_michael_booth': {
    title: 'The Almost Nearly Perfect People',
    author: 'Michael Booth',
    language: 'English'
  },

  'himmelstrand_john_ajvide_lindqvist': {
    title: 'Himmelstrand',
    author: 'John Ajvide Lindqvist',
    language: 'Swedish'
  },

  'Rörelsen_john_ajvide_lindqvist': {
    title: 'Rörelsen. Den andra platsen',
    author: 'John Ajvide Lindqvist',
    language: 'Swedish'
  },

  'x_john_ajvide_lindqvist': {
    title: 'X. Den sista platsen',
    author: 'John Ajvide Lindqvist',
    language: 'Swedish'
  },

  'un_lun_dun_china_miéville': {
    title: 'Un Lun Dun',
    author: 'China Miéville',
    language: 'English'
  }
}

const BookCovers = {

  'hyperion_dan_simmons': 
    {cover: './img/hyperion.jpg'},

  'the_fall_of_hyperion_dan_simmons':
    {cover: './img/hyperion_fall.jpg'},

  'endymion_dan_simmons':
    {cover: './img/endymion.jpg'},

  'the_rise_of_endymion_dan_simmons':
    {cover: './img/endymion_rise.jpg'},

  'unsong_scott_alexander':
    {cover: './img/unsong.jpg'},

  'the_almost_nearly_perfect_people_michael_booth':
    {cover: './img/perfect_people.jpg'},

  'himmelstrand_john_ajvide_lindqvist':
    {cover: './img/himmelstrand.jpg'},

  'Rörelsen_john_ajvide_lindqvist':
    {cover: './img/rorelsen.jpg'},

  'x_john_ajvide_lindqvist':
    {cover: './img/x.jpg'},

  'un_lun_dun_china_miéville':
    {cover: './img/unlundun.jpg'}
}

// Creating the DIV container and UL for all the books:
const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

const ul = document.createElement('ul');


// looping through the array of books, creating elements,
// assigning elements attributes:
for (let i = 0; i < bookTitles.length; i++) {
  const li = document.createElement('li');

  // creating variables to store data:
  const liTitle = document.createElement('h2');
  const liAuthor = document.createElement('p');
  const liLanguage = document.createElement('p');
  const liCover = document.createElement('img');

  // giving variables attributes for future CCSation:
  // 'CCSation' is the new word, you welcome :)
  liTitle.setAttribute('class', 'book-title');
  liAuthor.setAttribute('class', 'book-author');
  liLanguage.setAttribute('class', 'book-language');
  
  let a = bookTitles[i];

  // giving the book data to our variables:
  if (Books.hasOwnProperty(a)) {
    liTitle.innerHTML = Books[a].title;
    liAuthor.innerHTML = Books[a].author;
    liLanguage.innerHTML = Books[a].language;
  }

  // and adding covers:
  if (BookCovers.hasOwnProperty(a)) {
    liCover.src = BookCovers[a].cover;
  }

  // Putting elements inside of LI:
  li.appendChild(liTitle);
  li.appendChild(liAuthor);
  li.appendChild(liLanguage);
  li.appendChild(liCover);

  // Putting LI elements into UL:
  ul.appendChild(li);
}

// Putting UL inside of the DIV container:
container.appendChild(ul);