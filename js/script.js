'use strict';

let gameFlag = true;


function Game () {
    let wishNumber = getRandomInt(1, 100);

    return function startGame () {
        if (gameFlag) {
            let answer = getAnswerFromUser();
            if (answer === null){
                gameFlag = false;
                return alert("Игра закончена!")
            }
            if (checkCorrectNumber(answer)){
                checkAnswer(+answer, wishNumber);
                startGame();
            } else if (!checkCorrectNumber(answer)){
                alert("Введите число!");
                startGame();
            }
        }
    }   
}

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAnswerFromUser () {
    return prompt("Угадай число от 1 до 100");
}

function checkAnswer (userNumber, wishNumber) {
    if (userNumber === wishNumber) {
        gameFlag = false;
        return alert("Вы угадали!");
    } else if (userNumber < wishNumber) {
        return alert("Загаданное число больше");
    } else if (userNumber > wishNumber) {
        return alert("Загаданное число меньше");
    } 
}

function checkCorrectNumber (userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(parseFloat(userNumber));
}

let game = Game();
game();

