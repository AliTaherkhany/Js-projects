const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hslaColor = 'hsla(';
    for (i = 0; i < 4; i++) {
        switch(i) {
            case 0:
                hslaColor += getRandomNumber(361) + ', '
                continue
            case 1:
            case 2:
                hslaColor += getRandomPrecentage() + '%, '
                continue
            case 3:
                hslaColor += getRandomPrecentage() / 100 + ')'
        }
    }
    console.log(hslaColor);
    document.body.style.backgroundColor = hslaColor;
    color.textContent = hslaColor;
})

function getRandomNumber(a) {
    return Math.floor(Math.random() * a)
}
function getRandomPrecentage() {
    return Math.floor(Math.random() * 101)
}