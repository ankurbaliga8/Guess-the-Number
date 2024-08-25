let input = document.getElementById('input');
let button = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;
let isAnswerFound = false;

button.addEventListener('click', function () {
    guessesNumber();
});

function guessesNumber() {
    if (input.value === '' || isNaN(input.value) || input.value < 1 || input.value > 100) {
        wrong.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        if (!isAnswerFound) {
            numGuesses++;
            if (input.value == answer) {
                wrong.textContent = 'Congratulations! You guessed the number correctly!';
                guesses.textContent = 'It took you ' + numGuesses + ' guesses.';
                isAnswerFound = true;
                setTimeout(function () {
                    window.location.reload();
                }, 5000);
            } else if (input.value < answer) {
                wrong.textContent = 'Too low! Try again.';
            } else {
                wrong.textContent = 'Too high! Try again.';
            }
        }
    }
}