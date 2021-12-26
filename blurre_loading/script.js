const loading = document.querySelector('.loading-text');
const fundo = document.querySelector('.fundo');

var load = 0;
var int = setInterval(blurring, 30)
function blurring(){
  load++;
  if(load>99){
    clearInterval(int);
  }
  
  loading.innerHTML=`${load}%`;
  loading.style.opacity=scale(load, 0 , 100, 1, 0);
  fundo.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}


const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}