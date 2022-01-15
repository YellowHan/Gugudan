const date = new Date();
const week = ['일', '월', '화', '수', '목', '금', '토'];
const today = `오늘은 ${date.getMonth()+1}월 ${date.getDate()}일 ${week[date.getDay()]}요일`;
const question = document.getElementById('question');
let dan;

document.getElementById('title').innerText = "구구단을 풀어봐요♬"
document.getElementById('date').innerText = today;

document.addEventListener('click', e => {
  const value = e.target.value;
  if(value > 1 && value <10) {
    dan = value;
    question.innerHTML = "";
    for(let i = 1; i < 10; i++) {
      question.innerHTML += `${value} * ${i} = <input id='num${i}' type='text' value='' /><a id='answer${i}'></a><br>`
    }
    document.getElementById('check').innerHTML = "<input type='button' value='정답체크' />";
  }
  if(value == "정답체크") {
    console.log('dan 체크 ->'+dan)
    for(let i = 1; i < 10; i++) {
      document.getElementById(`num${i}`).value == dan * i? document.getElementById(`answer${i}`).innerText = "O" : document.getElementById(`answer${i}`).innerText = "X";
    }
  }
});
