const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
//para los getElement de clases o de id, no se requiere poner el punto o #
// const parrafito = document.getElementsByClassName('parrafito');
const pid = document.querySelector('#pid');
// const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,p,parrafito,pid,input
});

//Cambiar el nombre visual y con codigo html
// h1.innerHTML='Pelotudo <br> Fep';

//Cambiar el nombre visual pero como texto
h1.innerText='Patito <br> Feo';

//Recuperar informacion de un atributo creado
//<h1 pantalla="platzigl"
console.log(h1.getAttribute('class'));

//Modificar la clase verde
//h1.setAttribute('class','rojo');

//Se añade una clase
h1.classList.add('rojo');

//Se borra o elimina una clase
h1.classList.remove('verde');

//Modificar el value en el input
input.value="456";

//Crear un nuevo elemento
//console.log(document.createElement('span'));
const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png')
console.log(img);
pid.appendChild(img);//Agrega el elemento despues del contenido del parrafo, lo mismo con Append