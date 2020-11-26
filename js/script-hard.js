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
                let userAnswer = checkAnswer(+answer, wishNumber, numberOfAttempts);
                console.log(">> ~ startGame ~ userAnswer", userAnswer);
                if (userAnswer === true) {
                    wishNumber = getRandomInt(1, 100);
                    numberOfAttempts = 10;
                    gameFlag = true;
                    startGame();
                } else if (userAnswer === false) {
                    gameFlag = false;
                    return alert('Спасибо за игру!');
                } else {
                    numberOfAttempts = userAnswer;
                    console.log(">> ~ startGame ~ numberOfAttempts", userAnswer)
                    startGame();
                }
            } else if (!checkCorrectNumber(answer)){
                alert("Введите число!");
                startGame();
            }
        } else if (numberOfAttempts === 0 || numberOfAttempts < 0) {
            let userWish = confirm('Попытки закончились, хотите сыграть еще?');
            if (userWish === true) {
                wishNumber = getRandomInt(1, 100);
                numberOfAttempts = 10;
                startGame();
            } else if (userWish === false) {
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