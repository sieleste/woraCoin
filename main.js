const coinBtn = document.querySelector('#coinImg');
const scoreField = document.querySelector('#score');

let score = parseInt(scoreField.innerText);
let plusScore_var = 1;

coinBtn.addEventListener('click', coinBtnClick);

function coinBtnClick(){
  coinBtn.style.transform = 'scale(.98)';

  setTimeout(() => {
    coinBtn.style.transform = 'scale(1)';
  }, 100);

  plusScore()
}

function plusScore(){
  score += plusScore_var;
  scoreField.innerText = `${score}`;
}

