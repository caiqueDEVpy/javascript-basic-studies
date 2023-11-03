// sintax padrão parar criar um função em javascript.//
function somar(a,b){
    return a + b
};
console.log(somar(2,4));

// podemos armarzenar uma função em uma varaivel...//
const soma = function somar1(a,b){
    return a + b
};
console.log(soma(3,4));

// sintax para criar um arrow functions.//
const somar2 = (a,b)=>{
    return a + b
};
console.log(somar2(10,12));


// funções com retorno e sem retorno.//

function peso(m,h){
    return m * h
};
const resultado = peso(10,6);
console.log(resultado)
// Funções que tem retorno, deve usar uma variavel parar armezenar o seu retorno,afim de aguardar para poder manipula-lo.

function peso2(m,h){
    console.log(m *h);
};
peso2(10,6);
//Funções sem retorno não é possivel guardar o retorno da opreção recebida em relação aos seus parâmetros.

// funções com parametros em argumentos variados, usando um arrey de argumentos.//
function somar_args(){
    let soma_args=0
    for(let i =0; i<arguments.length;i++){
        soma_args+=arguments[i]
    }
    return soma_args
}
const somat=somar_args(2,3,4)
console.log(somat)

// funções com valores padrão.//
function valor_padrao(a,b,c){
    a = a||1;
    b = b||2;
    c = c||3;
    return a + b + c
}
const ret_valor=valor_padrao()
console.log(ret_valor)