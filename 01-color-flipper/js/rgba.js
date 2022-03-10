const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let rgbaColor = 'rgb(';
    for (i = 0; i < 4; i++) {
        if (i != 3) {
            rgbaColor += getRandomNumber() + ', ';
        } else {
            rgbaColor += (Math.random()).toFixed(2) + ')'
        }
    }
    console.log(rgbaColor);
    document.body.style.backgroundColor = rgbaColor;
    color.textContent = rgbaColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * 256)
}