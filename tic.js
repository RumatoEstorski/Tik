let tick = true;
let t;
let numbersOfTikTak = prompt("Enter number of Tik and Tak:");
let timeOfTikTak = prompt("Enter number of second Tik and Tak:");
function ticker(time) {
  let d1 = new Date();
  let dif = (d1.getTime() - d.getTime()) / 1000;
  if (dif >= time) {
    clearInterval(t);
    return;
  }
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
     count++;
     
    if (count == numbersOfTikTak){
         clearInterval(t);
    }
}

let d = new Date();
let time;
t = setInterval(ticker.bind(this, numbersOfTikTak), timeOfTikTak*1000);


