let angles = document.querySelectorAll('.angles')
let button = document.querySelector('#submit_button')
let result = document.querySelector("#result")

button.addEventListener('click', checkIfTriangle)

function checkIfTriangle() {
    validateInputs()
    sumUpAngles()
}
function validateInputs() {
    if (isNaN(angles[0].value) || isNaN(angles[1].value) || isNaN(angles[2].value)) {
        result.innerText = 'Please enter numbers'
    }
}

function sumUpAngles() {
    let sum = 0;
    for (let angle of angles.values()) {
        sum = sum + parseInt(angle.value);
    }
    if(sum === 180){
        result.innerText = 'Yes! It is a triangle'
    } else {
        result.innerText = 'Nope! It is not'
    }
}