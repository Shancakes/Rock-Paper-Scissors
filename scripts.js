console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function () {
    const choices = document.querySelectorAll('.choice');
    const result = document.querySelector('.result');
    const resultImage = document.querySelector('.result-image');

    function getWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return { text: 'It\'s a tie!', image: 'meh.png' };
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return { text: 'You win!', image: 'happy.png' };
        } else {
            return { text: 'You lose :(', image: 'sad.png' };
        }
    }

    function playGame(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const resultData = getWinner(userChoice, computerChoice);

        result.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultData.text}`;
        resultImage.src = `images/${resultData.image}`;
        resultImage.alt = resultData.text;
    }

    choices.forEach(choice => {
        choice.addEventListener('click', function () {
            const userChoice = this.textContent.toLowerCase();
            playGame(userChoice);
        });
    });
});
