const sub = (value) => {
  for(let i = 1; i < 10; i++) {
    random1[i] = value == "sub1"? Math.floor((Math.random()*9)+1) : value == "sub2"? Math.floor((Math.random()*90)+10) : "";
    random2[i] = value == "sub1"? Math.floor((Math.random()*9)+1) : value == "sub2"? Math.floor((Math.random()*90)+10) : "";
    question.innerHTML += `${random1[i]} - ${random2[i]} = <input id='sub${i}' type='text' value='' /><a id='answer${i}'></a><br>`
  }
}