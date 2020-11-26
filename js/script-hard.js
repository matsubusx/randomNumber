let gameFlag = true;


function Game () {
    let wishNumber = getRandomInt(1, 100);
    let numberOfAttempts = 10;

    return function startGame () {
        if (gameFlag && numberOfAttempts > 0) {
            let answer = getAnswerFromUser();
            if (answer === null){
                gameFlag = false;
                return alert("Игра закончена!")
            }
            if (checkCorrectNumber(answer)){
                userAnswer = checkAnswer(+answer, wishNumber, numberOfAttempts);
                if (userAnswer === true) {
                    wishNumber = getRandomInt(1, 100);
                    numberOfAttempts = 10;
                    startGame();
                } else if (userAnswer === false) {
                    gameFlag = false;
                    return alert('Спасибо за игру!');
                } else {
                    console.log('Im here')
                    numberOfAttempts = userAnswer;
                    console.log(">> ~ startGame ~ numberOfAttempts", userAnswer)
                    startGame();
                }
            } else if (!checkCorrectNumber(answer)){
                alert("Введите число!");
                startGame();
            }
        } else if (numberOfAttempts === 0 || attempts < 0) {
            userWish = confirm('Попытки закончились, хотите сыграть еще?')
            if (userWish) {
                wishNumber = getRandomInt(1, 100);
                numberOfAttempts = 10;
                startGame();
            } else {
                gameFlag = false;
                return alert("Спасибо за игру!");
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

function checkAnswer (userNumber, wishNumber, attempts) {
    if (userNumber === wishNumber) {
        gameFlag = false;
        alert("Вы угадали!");
        return confirm('Хотите сыграть еще раз?');
    } else if (userNumber < wishNumber) {
        alert(`Загаданное число больше, осталось ${attempts - 1} попыток...`);
        return attempts - 1;
    } else if (userNumber > wishNumber) {
        alert(`Загаданное число меньше, осталось ${attempts - 1} попыток...`);
        return attempts - 1;
    } 
}

function checkCorrectNumber (userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(parseFloat(userNumber));
}

let game = Game();
game();