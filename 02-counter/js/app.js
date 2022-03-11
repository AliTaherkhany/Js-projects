// Set initial count
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList;
        if (style.contains('decrease')) {
            count--
        } else if (style.contains('increment')) {
            count++
        } else {
            count = 0
        }

        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = 'var(--clr-grey-1)'
        }
        value.textContent = count;
    })
})