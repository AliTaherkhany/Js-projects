const colors = ['lightgreen', 'cadetblue', 'rgba(133,122,200)', '#ff9275'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber(colors);
    console.log(colors[randomNumber]);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})

function getRandomNumber(a) {
    return Math.floor(Math.random() * a.length)
}