const mul = (value) => {
  for(let i = 1; i < 10; i++) {
    random1[i] = value == "mul2"? Math.floor((Math.random()*90)+10) : value == "mul3"? Math.floor((Math.random()*900)+100) : "";
    random2[i] = value == "mul2"? Math.floor((Math.random()*9)+1) : value == "mul3"? Math.floor((Math.random()*90)+10) : "";
    question.innerHTML += `${random1[i]} * ${random2[i]} = <input id='mul${i}' type='text' value='' /><a id='answer${i}'></a><br>`
  }
}