window.onload = init;

function init() {
    document.querySelector('.input')
        .addEventListener('keyup', handleTyping);
    document.querySelector('.input2')
        .addEventListener('keyup', handleSecondTyping);
}

function handleTyping(event) {
    let userInput = event.target.value.toLowerCase();
    let answer = '';
    i = 0;
    while (i < userInput.length) {
        if (i === 0  || userInput[i-1] === ' ') {
            answer += userInput.charAt(i).toUpperCase();
        } else {
            answer += userInput[i];
        }
        i++;
    };

    document.querySelector('.title-case').innerText = answer;
}

function handleSecondTyping(event) {
    let userInput = event.target.value.toLowerCase();
    let answer = '';
    let counter = 0;
    for (i = 0; i < userInput.length; i++){
        if (counter % 2 === 0 && userInput[i] !== ' '){
            answer += userInput.charAt(i).toUpperCase();
            counter++;
        } else if (userInput[i] === ' ') {
            answer += userInput[i];
        } else {
            answer += userInput[i];
            counter++;
        }
    }

    document.querySelector('.alternating-capital').innerText = answer;
}
