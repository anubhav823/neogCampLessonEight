const base = document.querySelector('#base')
const height = document.querySelector('#height')
const button = document.querySelector("#submit_button")
const output = document.querySelector('#output')

button.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse(){
    if(isNaN(base.value) || isNaN(height.value)){
        output.innerText = 'Please enter numbers for calculation'
    } else {
        let hypotenuse = Math.sqrt(Math.pow(Number(base.value), 2)+Math.pow(Number(height.value), 2));
        output.innerText = 'The hypotenuse is '+hypotenuse.toFixed(2)    
    }
}