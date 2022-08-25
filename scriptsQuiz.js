let button = document.querySelector('#submit_button');
const correctAnswers = ['45', 'isoceles', '30']
const quiz = document.querySelector("#quiz")


const result = document.querySelector('#result')
// console.log(values);
button.addEventListener('click', calculateScores);

function calculateScores() {
    let score = 0;
    let index = 0;
    const formData = new FormData(quiz)
    const values = formData.values();
    for (let value of values) {
        console.log(value + " " + correctAnswers[index]);
        if (value == correctAnswers[index]) {
            score++;
        }
        index++;
    }
    console.log(score);
    result.innerText = 'Your score is ' + score;
}