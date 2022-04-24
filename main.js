var value = null;
let arr = [];
let display = document.getElementById('display');


function pegaValor(i){
  display.value = i;
  if(display.value != undefined || display.value != null){
  value = display.value;
  arr.push(display.value);
  display.innerText = arr.join('');
  }
}


function res(){
  display.innerText = eval(arr.join('')); 
  arr = [];
}


function reset(){
  arr = [];
  display.innerText = '';
}


function del(){
  arr.pop() 
  display.innerText = arr.join('');
}