// let wrapper = document.querySelector('.wrapper');
let card = document.querySelector('.card');
let cardHeader = document.querySelector('.card__header');
let switcher = document.querySelector('.switcher');
let btn = document.querySelector('.done');

switcher.onclick = ()=>{
  switcher.classList.toggle('active');
}
cardHeader.onclick = ()=>{
  card.classList.add('active');
}
btn.onclick = ()=>{
  if(card.classList.contains('active')){
    card.classList.remove('active');
  }
  if(!switcher.classList.contains('active')){
    switcher.classList.add('active');
  }
}


// wrapper.onclick=()=>{
//   card.classList.remove('active');
// }




let hourLine = document.querySelector('.hour');
let minutesLine = document.querySelector('.minutes');
let y1;
let y2;
// let count;
let scrollDown;
let scrollUp;
let val;

let hours = document.querySelectorAll('.hour div');
let minutes = document.querySelectorAll('.minutes div');
let number;

let timeH = document.querySelector('.time .timeHour');
let timeM = document.querySelector('.time .timeMinutes');

hourLine.ontouchstart = (e)=>{
  y1 = e.touches[0].clientY;
  console.log(y1);
}

hourLine.ontouchmove = (e)=>{
  y2 = e.touches[0].clientY;
  console.log(y2);

  scrollDown = Math.round((y1-y2)/10);
  scrollUp = Math.round((y2-y1)/10);
  // scrollUp = Math.round((y2-scrollDown)/10);
  // scrollUp = Math.round((y2/10)-scrollDown);

  if(y1>y2){
    console.log('scrollDown to ' + scrollDown);
    if(scrollDown<=21 && scrollDown>=0){
      hourLine.style.top = -(scrollDown * 65) + 'px';
    }
  }
  else if(y1<y2){
    console.log('scrollUp to ' + scrollUp);
    if(scrollUp>=21 && scrollUp<=0){
      hourLine.style.top = (scrollUp * 65) + 'px';
    }
  }


  val = Number(scrollDown) + 2;
  console.log('val '+ val);
  if(val<10 && val>0){
    timeH.innerHTML =  `0${val}`;
  }
  else if(val<=24 && val>0){
    timeH.innerHTML =  val;
  }



  for(let i=0; i<hours.length; i++){
    number = Number(hours[i].firstChild.data);
    // console.log('num '+number);
    if((number-2)==scrollDown){
      hours[i].style.color = '#fff';
    } else{
      hours[i].style.color = '#777';
    }
  }
}



minutesLine.ontouchstart = (e)=>{
  y1 = e.touches[0].clientY;
  console.log(y1);
}

minutesLine.ontouchmove = (e)=>{
  y2 = e.touches[0].clientY;
  console.log(y2);

  scrollDown = Math.round((y1-y2)/5);
  scrollUp = Math.round((y2-y1)/5);
  // scrollUp = Math.round((y2-scrollDown)/10);
  // scrollUp = Math.round((y2/10)-scrollDown);

  if(y1>y2){
    console.log('scrollDown to ' + scrollDown);
    if(scrollDown<=57 && scrollDown>=0){
      minutesLine.style.top = -(scrollDown * 65) + 'px';
    }
  }
  else if(y1<y2){
    console.log('scrollUp to ' + scrollUp);
    if(scrollUp>=57 && scrollUp<=0){
      minutesLine.style.top = (scrollUp * 65) + 'px';
    }
  }


  val = Number(scrollDown) + 2;
  console.log('val '+ val);
  if(val<10 && val>0){
    timeM.innerHTML =  `0${val}`;
  }
  else if(val<=60 && val>0){
    timeM.innerHTML =  val;
  }


  for(let i=0; i<minutes.length; i++){
    number = Number(minutes[i].firstChild.data);
    // console.log('num '+number);
    if((number-2)==scrollDown){
      minutes[i].style.color = '#fff';
    } else{
      minutes[i].style.color = '#777';
    }
  }
}



let day_1 = new Date(2021, 06, 01),
    day_2 = new Date(2021, 05, 31);

function diffDates(day_one, day_two) {
    return (day_one - day_two) / (60 * 60 *24 * 1000);
};
console.log(diffDates(day_1, day_2));