let sides = document.querySelectorAll('.sides')
let button = document.querySelector('#submit-button')
let output = document.querySelector('#result')

button.addEventListener('click', calculateArea)

function calculateArea() {
    let semi_perimeter = 0;
    if (validateInputs()) {
        for (let side of sides) {
            semi_perimeter = semi_perimeter + Number(side.value);
        }
        semi_perimeter = semi_perimeter / 2;
        let area = semi_perimeter;
        for (let side of sides) {
            area = area * (semi_perimeter - Number(side.value));
        }

        area = Math.sqrt(area);
        if (isNaN(area) || area === 0) {
            output.innerText = 'A triangle cannot be formed with the given inputs. Please ensure that the sum of any two sides is larger than the third side.'
        } else {
            output.innerText = 'Area ' + area.toFixed(2);
        }
    } else {
        output.innerText = 'Sides are not valid'
    }
}

function validateInputs() {
    for (let side of sides) {
        if (isNaN(side.value)) {
            return false;
        }
    }
    return true;
}