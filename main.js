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

    document.querySelector('.changeme').innerText = answer;
}

function handleSecondTyping(event) {
    let userInput = event.target.value.toLowerCase();
    let answer = '';
    for (i = 0; i < userInput.length; i++){
        if (i % 2 === 0 && userInput[i] !== ' '){
            answer += userInput.charAt(i).toUpperCase();
        } else {
            answer += userInput[i];
        }
    }

    document.querySelector('.changeme2').innerText = answer;
}
