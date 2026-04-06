import readLineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (description, getGameData) => {
    console.log('Welcome to the Brain Games!');
    const name = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);

    const roundsCount = 4;
    const succesMessages = ['Correct!', 'Well done!', 'Nice job', 'Прекрасно!'];

    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = getGameData();
        console.log(`Qustion: ${question}`);
        const userAnswer = readLineSync.question('Your answer:');

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, $(name)!`);
            return
        }
        const randomMessage = succesMessages[getRandomInt(0, succesMessages.length -1)];
        console.log(randomMessage);
    };

   console.log(`Congratulations, ${name}!`);
}

 export default runGame;