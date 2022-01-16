let mul;
const random1 = [];
const random2 = [];

document.addEventListener('click', e => {
  const value = e.target.value;
  if(value == "mul2" || value == "mul3") {
    dan = null;
    mul = value;
    question.innerHTML = "";
    for(let i = 1; i < 10; i++) {
      random1[i] = mul == "mul2"? Math.floor((Math.random()*90)+10) : mul == "mul3"? Math.floor((Math.random()*900)+100) : "";
      random2[i] = mul == "mul2"? Math.floor((Math.random()*10)) : mul == "mul3"? Math.floor((Math.random()*90)+10) : "";
      question.innerHTML += `${random1[i]} * ${random2[i]} = <input id='mul${i}' type='text' value='' /><a id='answer${i}'></a><br>`
    }
    document.getElementById('check').innerHTML = "<input type='button' value='정답체크' />";
  }
  if(value == "정답체크") {
    if(mul == "mul2" || mul == "mul3") {
      for(let i = 1; i < 10; i++) {
        document.getElementById(`mul${i}`).value == random1[i] * random2[i]? document.getElementById(`answer${i}`).innerText = "O" : document.getElementById(`answer${i}`).innerText = "X";
        console.log(`random1 : ${random1[i]} * random2 : ${random2[i]} = document.getElementById("mul${i}").value`)
      }
    }
  }
});
