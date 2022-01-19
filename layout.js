const date = new Date();
const week = ["일", "월", "화", "수", "목", "금", "토"];
const today = `오늘은 ${date.getMonth() + 1}월 ${date.getDate()}일 ${week[date.getDay()]}요일`;

const question = document.getElementById("question");
const check = document.getElementById("check");

const random1 = [];
const random2 = [];

document.getElementById("title").innerText = "초등 수학♬";
document.getElementById("date").innerText = today;

let num;
document.addEventListener("click", (e) => {
  const value = e.target.value;
  if (String(value).includes("add")) {
      init();
      add(value);
      checkCreate();
  }
  if (String(value).includes("sub")) {
    init();
    sub(value);
    checkCreate();
  }
  if (String(value).includes("dan")) {
    init();
    dan(value);
    num = value[3];
    checkCreate();
  }
  if (String(value).includes("mul")) {
    init();
    mul(value);
    checkCreate();
  }
  if(value == "정답체크") {
    const answer = document.querySelector("#question input").id;
    show(answer, num);
  }
});

const init = () => {
  question.innerHTML = "";
};

const checkCreate = () => {
  document.getElementById("check").innerHTML =
    "<input type='button' value='정답체크' />";
};

const show = (answer, num) => {
  if (String(answer).includes("add")) {
    for (let i = 1; i < 10; i++) {
      document.getElementById(`add${i}`).value == random1[i] + random2[i]
        ? (document.getElementById(`answer${i}`).innerText = "O")
        : (document.getElementById(`answer${i}`).innerText = "X");
    }
  }
  if (String(answer).includes("sub")) {
    for (let i = 1; i < 10; i++) {
      document.getElementById(`sub${i}`).value == random1[i] - random2[i] &&
      document.getElementById(`sub${i}`).value != ""
        ? (document.getElementById(`answer${i}`).innerText = "O")
        : (document.getElementById(`answer${i}`).innerText = "X");
    }
  }
  if (String(answer).includes("dan")) {
    for (let i = 1; i < 10; i++) {
      document.getElementById(`dan${i}`).value == num * i
        ? (document.getElementById(`answer${i}`).innerText = "O")
        : (document.getElementById(`answer${i}`).innerText = "X");
    }
  }
  if (String(answer).includes("mul")) {
    for (let i = 1; i < 10; i++) {
      document.getElementById(`mul${i}`).value == random1[i] * random2[i]
        ? (document.getElementById(`answer${i}`).innerText = "O")
        : (document.getElementById(`answer${i}`).innerText = "X");
    }
  }
};
