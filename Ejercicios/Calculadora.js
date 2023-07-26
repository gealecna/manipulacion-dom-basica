const val1=document.querySelector('#valor1');
const val2=document.querySelector('#valor2');
const sum=document.querySelector('#suma')
const res=document.querySelector('#resta');
const multi=document.querySelector('#multi');
const div=document.querySelector('#divi');
const result=document.querySelector('#resultado');

function Calculando(){
    if(sum.checked){
        result.innerText=+val1.value + +val2.value;
        return;
    }else if(res.checked){
        result.innerText=+val1.value - +val2.value;return;
    }else if(multi.checked){
        result.innerText=+val1.value * +val2.value;return;
    }else{
        result.innerText=+val1.value / +val2.value;return;
    }

}
