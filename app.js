window.onload = ()=>{

  let body = document.body;
  let ss = document.querySelector('.styleSwitcher');
  
  ss.onclick = ()=>{
    if(!ss.classList.contains('active')){
      ss.classList.add('active');
      body.classList.add('dark');
      body.classList.remove('light');
    }
    else if(ss.classList.contains('active')){
      ss.classList.remove('active');
      body.classList.add('light');
      body.classList.remove('dark');
    }
  }



  // let wrapper = document.querySelector('.wrapper');
let black = document.querySelector('.black');
let card = document.querySelector('.card');
let cardHeader = document.querySelector('.card__header');
let switcher = document.querySelector('.switcher');
let btn = document.querySelector('.done');

switcher.onclick = ()=>{
  if(!switcher.classList.contains('active')){
    switcher.classList.add('active');
  }
  else{
    switcher.classList.remove('active');
  }
}


cardHeader.onclick = ()=>{
  if(!card.classList.contains('active')){
    card.classList.add('active');
  }
  if(!black.classList.contains('active')){
    black.classList.add('active');
  }
}
black.onclick = ()=>{
  if(card.classList.contains('active')){
    card.classList.remove('active');
  }
  if(black.classList.contains('active')){
    black.classList.remove('active');
  }
}





let hourLine = document.querySelector('.hour');
let minutesLine = document.querySelector('.minutes');
let y1;
let y2;

let scrollDown;
let scrollUp;
let val;

let hours = document.querySelectorAll('.hour div');
let minutes = document.querySelectorAll('.minutes div');
let number;

let timeH = document.querySelector('.time .timeHour');
let timeM = document.querySelector('.time .timeMinutes');
let time;
let cycle = document.querySelector('.cycle');
let different;



hourLine.ontouchstart = (e)=>{
  y1 = e.touches[0].clientY;
  // console.log(y1);
}
hourLine.ontouchmove = (e)=>{
  y2 = e.touches[0].clientY;
  // console.log(y2);

  scrollDown = Math.round((y1-y2)/10);
  scrollUp = Math.round((y2-y1)/10);
  // scrollUp = Math.round((y2-scrollDown)/10);
  // scrollUp = Math.round((y2/10)-scrollDown);

  if(y1>y2){
    // console.log('scrollDown to ' + scrollDown);
    if(scrollDown<=21 && scrollDown>=0){
      hourLine.style.top = -(scrollDown * 65) + 'px';
    }
  }
  else if(y1<y2){
    // console.log('scrollUp to ' + scrollUp);
    if(scrollUp>=21 && scrollUp<=0){
      hourLine.style.top = (scrollUp * 65) + 'px';
    }
  }


  val = Number(scrollDown) + 2;
  // console.log('val '+ valH);
  if(val<10 && val>0){
    timeH.innerHTML =  `0${val}`;
  }
  else if(val<=24 && val>0){
    timeH.innerHTML =  val;
  }



  for(let i=0; i<hours.length; i++){
    number = Number(hours[i].firstChild.data);
    // console.log('num '+number);
    if(body.classList.contains('dark')){
      if((number-2)==scrollDown){
        hours[i].style.color = '#fff';
      } else{
        hours[i].style.color = '#777';
      }
    }
    else if(body.classList.contains('light')){
      if((number-2)==scrollDown){
        hours[i].style.color = '#333';
      } else{
        hours[i].style.color = '#777';
      }
    }
  }
}

minutesLine.ontouchstart = (e)=>{
  y1 = e.touches[0].clientY;
  // console.log(y1);
}
minutesLine.ontouchmove = (e)=>{
  y2 = e.touches[0].clientY;
  // console.log(y2);

  scrollDown = Math.round((y1-y2)/5);
  scrollUp = Math.round((y2-y1)/5);
  // scrollUp = Math.round((y2-scrollDown)/10);
  // scrollUp = Math.round((y2/10)-scrollDown);

  if(y1>y2){
    // console.log('scrollDown to ' + scrollDown);
    if(scrollDown<=57 && scrollDown>=0){
      minutesLine.style.top = -(scrollDown * 65) + 'px';
    }
  }
  else if(y1<y2){
    // console.log('scrollUp to ' + scrollUp);
    if(scrollUp>=57 && scrollUp<=0){
      minutesLine.style.top = (scrollUp * 65) + 'px';
    }
  }


  val = Number(scrollDown) + 2;
  // console.log('val '+ valM);
  if(val<10 && val>0){
    timeM.innerHTML =  `0${val}`;
  }
  else if(val<=60 && val>0){
    timeM.innerHTML =  val;
  }


  for(let i=0; i<minutes.length; i++){
    number = Number(minutes[i].firstChild.data);
    // console.log('num '+number);
    if(body.classList.contains('dark')){
      if((number-2)==scrollDown){
        minutes[i].style.color = '#fff';
      } else{
        minutes[i].style.color = '#777';
      }
    }
    else if(body.classList.contains('light')){
      if((number-2)==scrollDown){
        minutes[i].style.color = '#333';
      } else{
        minutes[i].style.color = '#777';
      }
    }
  }
}


function timeConverter(item){
  let a = item;
  let hour = a.getHours();
  if(hour<10){
    hour = `0${hour}`;
  }
  let min = a.getMinutes();
  if(min<10){
    min = `0${min}`;
  }
  time = `${hour}:${min}`;
  return time;
}
function timeDiff(firstDate, secondDate){
  let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
  different = (getDate(secondDate) - getDate(firstDate));
  let hour;
  let minute;
  if(different>0){
    hour = Math.floor((different % 86400000) / 3600000);
    minute = Math.round(((different % 86400000) % 3600000) / 60000);
  }
  else if(different<0){
    hour = 24 - (-Number(Math.floor((different % 86400000) / 3600000)));
    minute = 60 - (-Number(Math.round(((different % 86400000) % 3600000) / 60000)));
  }
  else if(different==0){
    hour = 0;
    minute = 0;
  }

  
  let result = `${hour} ч ${minute} мин`;
  if(minute=="00"){
    result = `${hour} ч`;
  }
  return result;
}
function addDiffTime(){
  let firstDate = timeConverter(new Date);
  // console.log(firstDate);

  let secondDate = `${timeH.textContent}:${timeM.textContent}`;
  // console.log(secondDate);

  cycle.innerHTML=`Через ${timeDiff(firstDate, secondDate)}`;
}
btn.onclick = ()=>{
  if(card.classList.contains('active')){
    card.classList.remove('active');
  }
  if(!switcher.classList.contains('active')){
    switcher.classList.add('active');
  }
  if(black.classList.contains('active')){
    black.classList.remove('active');
  }
  addDiffTime();
  sound();
}




function func1(signal){
  let audio = document.createElement('audio');
  audio.setAttribute("autoplay","true");
  audio.innerHTML = `<source src="${signal}.mp3" type="audio/mpeg">`;
  audio.volume = 0.05;
  document.body.appendChild(audio);
  // console.log('true');
} 

const obj = {
func1: "func1"
}

localStorage.setItem('fn', JSON.stringify(obj));
const newObj = JSON.parse(localStorage.getItem('fn'));
let b = newObj.func1;
// console.log(b);

// function diff(){
//   let firstDate = timeConverter(new Date);
//   let secondDate = `${timeH.textContent}:${timeM.textContent}`;

//   let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
//   different = (getDate(secondDate) - getDate(firstDate));
//   return different;
// }
function sound(){
  window.setTimeout(()=>{
    b = eval(b+'("1")');
  },different);
  console.log(different);
}

}