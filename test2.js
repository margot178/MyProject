const prompt = require('prompt-sync')({sigint: true});

let targetNumber = Math.floor(Math.random() * 100) +1;
let guess = null;

while (guess !== targetNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));


if(guess > targetNumber) {
    console.log("그것보다 작아요!");
} else if (guess < targetNumber) {
    console.log("그것보다는 커요!");
} else {
    console.log("정답이에요!");
    break;
}
}

//만약 타겟넘버보다 입력값이 크면 '그것보다 적어요!'라고 출력
//타겟넘버보다 입력값이 적으면 '그것보다는 커요!'라고 출력
//타겟넘버와 입력값이 같으면 '정답이에요!'라고 출력하고 while 을 종료

// const number = Math.random()
// console.log(number);

