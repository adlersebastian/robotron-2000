const control = document.querySelectorAll('[data-control]');
const stat = document.querySelectorAll('[data-stat]');
const parts = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "shield": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}

control.forEach((element) => {
    element.addEventListener('click', (event) => {
        handleData(event.target.dataset.control, event.target.parentNode);
        updateStats(event.target.dataset.part);
    })
})

function handleData(operation, control) {
    const part = control.querySelector('[data-counter]');

    if (operation === '-') {
        part.value = parseInt(part.value) - 1;
    } else {
        part.value = parseInt(part.value) + 1;
    }
}

function updateStats(part) {
    stat.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + parts[part][element.dataset.stat];
    })
}