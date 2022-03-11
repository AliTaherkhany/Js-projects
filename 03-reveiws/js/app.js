// Getting reviews with ajax
let xhr = new XMLHttpRequest();
xhr.open('GEt', 'data/reviews.json', false);
xhr.send();
const reviews = JSON.parse(xhr.response);
console.log(reviews.length);

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const btns = document.querySelectorAll('.btn');

// Set starting item
let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson()
})

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const cl = e.currentTarget.classList;
    if (cl.contains('prev-btn')) {
      currentItem--
      if (currentItem < 0) {
        currentItem = reviews.length - 1;
      }
    } else if (cl.contains('next-btn')) {
      currentItem++
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
    } else {
      currentItem = getRandomNumber(reviews);
    }
    showPerson();
  })
})

function getRandomNumber(a) {
  return Math.floor(Math.random() * a.length)
}