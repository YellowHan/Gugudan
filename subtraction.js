let sub;

document.addEventListener('click', e => {
  const value = e.target.value;
  if(value == "sub1" || value == "sub2") {
    dan = null;
    mul = null;
    add = null;
    sub = value;
    question.innerHTML = "";
    for(let i = 1; i < 10; i++) {
      random1[i] = sub == "sub1"? Math.floor((Math.random()*9)+1) : sub == "sub2"? Math.floor((Math.random()*90)+10) : "";
      random2[i] = sub == "sub1"? Math.floor((Math.random()*9)+1) : sub == "sub2"? Math.floor((Math.random()*90)+10) : "";
      question.innerHTML += `${random1[i]} - ${random2[i]} = <input id='sub${i}' type='text' value='' /><a id='answer${i}'></a><br>`
    }
    document.getElementById('check').innerHTML = "<input type='button' value='정답체크' />";
  }
  if(value == "정답체크") {
    if(sub == "sub1" || sub == "sub2") {
      for(let i = 1; i < 10; i++) {
        document.getElementById(`sub${i}`).value == random1[i] - random2[i] && document.getElementById(`sub${i}`).value != ""? document.getElementById(`answer${i}`).innerText = "O" : document.getElementById(`answer${i}`).innerText = "X";
        console.log("value : " + document.getElementById(`sub${i}`).value)
        console.log("= "+ (random1[i] - random2[i]))
      }
    }
  }
});