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
}
// wrapper.onclick=()=>{
//   card.classList.remove('active');
// }
let hourLine = document.querySelector('.hour');
let y1;
let y2;
let yDiff;
let count;
hourLine.ontouchstart = (e)=>{
  y1 = e.touches[0].clientY;
  console.log(y1);
}

hourLine.ontouchmove = (e)=>{
  y2 = e.touches[0].clientY;
  console.log(y2);

  yDiff = y1-y2;
  let count = Math.round(yDiff/10);
  console.log('diff ' + count);
  if(count<=21 && count>=0){
    hourLine.style.top = -(Math.round(yDiff/10) * 65) + 'px';
  }
}
let date = new Date;
console.log(date);