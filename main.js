const arm = document.querySelector('#arm');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

const control = document.querySelectorAll('.controle-ajuste');

control.forEach((element) => {
    element.addEventListener('click', (event) => {
        handleData(event.target.outerText);
    })
})

function handleData(operation) {
    if (operation === '-') {
        arm.value = parseInt(arm.value) - 1;
    } else {
        arm.value = parseInt(arm.value) + 1;
    }
}