const date = new Date();
const week = ['일', '월', '화', '수', '목', '금', '토']
const today = `오늘은 ${date.getMonth()+1}월 ${date.getDate()}일 ${week[date.getDay()]}요일`;
const question = document.getElementById('question');
const random1 = [];
const random2 = [];

document.getElementById('title').innerText = "초등 수학♬"
document.getElementById('date').innerText = today;
