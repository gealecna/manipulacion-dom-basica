const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');
const form = document.querySelector('#form');
const btn2 = document.querySelector('#color');

function btnOnClick(event){
    //console.log(input1.value+input2.value);
    event.preventDefault();
    const sumaInputs = +input1.value * +input2.value;
    pResultado.innerText = "Resultado: "+sumaInputs;
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

form.addEventListener('submit',btnOnClick);

btn2.addEventListener("dblclick", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  });