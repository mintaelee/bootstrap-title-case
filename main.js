window.onload = init;

function init() {
    document.querySelector('.input')
        .addEventListener('keyup', handleTitleCase);
    document.querySelector('.input2')
        .addEventListener('keyup', handleAlternatingCaptial);
    document.querySelector('.input3').addEventListener('keyup', handleReverseInput);
    document.querySelector('.input4').addEventListener('keyup', handleEmojiInput);
}

function handleTitleCase(event) {
    // Convert input to all lower case
    let userInput = event.target.value.toLowerCase();
    // Construct an empty string to concantenate
    let answer = '';
    let i = 0;

    // Loop through each character
    while (i < userInput.length) {
        // Uppercase if the character is first character of the string or
        // if it is first character after space
        if (i === 0  || userInput[i-1] === ' ') {
            answer += userInput.charAt(i).toUpperCase();
        // Leave the character as lowercase if neither
        } else {
            answer += userInput[i];
        }
        i++;
    };

    document.querySelector('.title-case').innerText = answer;
}

function handleAlternatingCaptial(event) {
    // Convert input to lowercase
    let userInput = event.target.value.toLowerCase();
    // Construct an empty string to concantenate
    let answer = '';
    // Construct a separate variable to count non-space character
    let counter = 0;

    // Iterate through each character
    for (let i = 0; i < userInput.length; i++){
        //Check if 
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

function handleReverseInput(event) {
    // Grab user input
    let userInput = event.target.value;

    // Construct an empty string
    let answer = '';

    // set i equal to string length - 1
    let i = userInput.length - 1;

    // Iterate through each character in reverse order
    while (i >= 0) {
        answer += userInput[i];
        i--;
    }

    document.querySelector('.reverse-output').innerText = answer;
}

function handleEmojiInput(event) {
    // Grab user input
    let userInput = event.target.value;

    // Construct an empty string
    let answer = '';

    // Construct index
    let i = 0;

    // Create an array of emojis
    let emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
        0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
        0x1F431, 0x1F42A, 0x1F439, 0x1F424];

    // Loop through each character in the string list
    while (i < userInput.length) {
        // Find the start of a word
        if (i === 0 || userInput[i-1] === ' ') {
            // Choose a random emoji to replace the word
            answer += String.fromCodePoint(emojis[Math.floor(Math.random() * emojis.length)]);
        }
        i++;
    }

    document.querySelector('.emoji-output').innerText = answer;
}