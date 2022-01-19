const dan = (value) => {
  for(let i = 1; i < 10; i++) {
    question.innerHTML += `${value[3]} * ${i} = <input id='dan${i}' type='text' value='' /><a id='answer${i}'></a><br>`
  }
}