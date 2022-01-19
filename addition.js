let add;

document.addEventListener('click', e => {
  const value = e.target.value;
  if(value == "add1" || value == "add2") {
    sub = null;
    dan = null;
    mul = null;
    add = value;
    question.innerHTML = "";
    for(let i = 1; i < 10; i++) {
      random1[i] = add == "add1"? Math.floor((Math.random()*9)+1) : add == "add2"? Math.floor((Math.random()*90)+10) : "";
      random2[i] = add == "add1"? Math.floor((Math.random()*9)+1) : add == "add2"? Math.floor((Math.random()*90)+10) : "";
      question.innerHTML += `${random1[i]} + ${random2[i]} = <input id='add${i}' type='text' value='' /><a id='answer${i}'></a><br>`
    }
    document.getElementById('check').innerHTML = "<input type='button' value='정답체크' />";
  }
  if(value == "정답체크") {
    if(add == "add1" || add == "add2") {
      for(let i = 1; i < 10; i++) {
        document.getElementById(`add${i}`).value == random1[i] + random2[i]? document.getElementById(`answer${i}`).innerText = "O" : document.getElementById(`answer${i}`).innerText = "X";
      }
    }
  }
});