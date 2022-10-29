function guessANumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100) :'), number => {
            if (number >= 0 && number <= 100) {
                if (number < computerGuess) {
                    console.log('Too Low');
                    recursiveAsyncReadLine();
                } else if (number > computerGuess) {
                    console.log('Too Higth');
                    recursiveAsyncReadLine();
                } else {
                    console.log('You guess it! Congratulations!!');
                    return readline.close;
                }
            } else {
                console.log('Invalid number.Enter a new number:');
                recursiveAsyncReadLine();
            }
        }
    }
}
guessANumber();
