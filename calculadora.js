const numeros = document.querySelectorAll('.numeros');
const operadores = document.querySelectorAll('.operadores');
const resultado = document.querySelector('#resultado');
const limpar = document.querySelector('#limpar');
const igual = document.querySelector('#igual');

numeros.forEach((numero)=> {
    numero.addEventListener('click', () => {
        resultado.value += numero.value;
    });
});
operadores.forEach((operador) => {
    operador.addEventListener('click', () => {
        resultado.value += operador.value;
    });
});
igual.addEventListener('click', () => {
    resultado.value = eval(resultado.value);
});
limpar.addEventListener('click', () => {
    resultado.value = ''; 
})