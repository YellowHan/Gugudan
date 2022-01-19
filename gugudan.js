let dan;

document.addEventListener('click', e => {
  const value = e.target.value;
  if(value > 1 && value <10) {
    add = null;
    sub = null;
    mul = null;
    dan = value;
    question.innerHTML = "";
    for(let i = 1; i < 10; i++) {
      question.innerHTML += `${value} * ${i} = <input id='num${i}' type='text' value='' /><a id='answer${i}'></a><br>`
    }
    document.getElementById('check').innerHTML = "<input type='button' value='정답체크' />";
  }
  if(value == "정답체크") {
    if(dan > 1 && dan <10) {
      for(let i = 1; i < 10; i++) {
        document.getElementById(`num${i}`).value == dan * i? document.getElementById(`answer${i}`).innerText = "O" : document.getElementById(`answer${i}`).innerText = "X";
      }
    }
  }
});
