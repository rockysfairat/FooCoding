'use strict';

const bookTitles = [
    'hyperion_dan_simmons', // 0 position in the array
    'the_fall_of_hyperion_dan_simmons', //1
    'endymion_dan_simmons', //2
    'the_rise_of_endymion_dan_simmons', //3
    'unsong_scott_alexander', //4
    'the_almost_nearly_perfect_people_michael_booth', //5
    'himmelstrand_john_ajvide_lindqvist', //6
    'Rörelsen_john_ajvide_lindqvist', //7
    'x_john_ajvide_lindqvist', //8
    'un_lun_dun_china_miéville' //9
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
    title: 'Rörelsen',
    author: 'John Ajvide Lindqvist',
    language: 'Swedish'
  },

  'x_john_ajvide_lindqvist': {
    title: 'X',
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
    {cover: '/img/endymion_rise.jpg'},

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

// I'm creating three elements: div, ul and li, right?
const container = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');

// I'm looping through ${bookTitles} and put its values into different li elements, I guess:
for (let i = 0; i < bookTitles.length; i++) {
  const liTitle = document.createElement('li');
  const liAuthor = document.createElement('li');
  const liLanguage = document.createElement('li');
  
  let a = bookTitles[i];

  if (Books.hasOwnProperty(a)) {
    liTitle.innerHTML = Books[a].title;
    liAuthor.innerHTML = Books[a].author;
    liLanguage.innerHTML = Books[a].language;
  }

  // I put li elements inside of ul:
  ul.appendChild(li);
}

// I put ul element inside the div container:
container.appendChild(ul);

// AND NOTHING IS WORKING :'-(






// PREVIOUS CODE:

// const cont = document.getElementById('container');

// let ul = document.createElement('ul');
  

// for (let i = 0; i <= bookTitles.length; i++) {
//   let li = document.createElement('li');

//   let a = bookTitles[i];

//   if (Books.hasOwnProperty(a)) {
//     li.innerHTML = '"' + Books[a].title + '" by ' + Books[a].author + ' written in ' + Books[a].language;
//   }

//   ul.appendChild(li);	
// }

// cont.appendChild(ul);