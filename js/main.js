function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}
function redirecionar(){
    window.open("https://github.com"); // nova aba
    window.location.href = "https://github.com"; // mesma página
}

function trocar(elemento){
    //document.getElementById("onmouse").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("onmouse").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1+n2;
}
*/
/*
function validaIdade(){
    var validar;
    if (idade>=18){
        validar = true;
    }
    else{
        validar=false;
    }
    return validar;
}
*/

/*
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//var d = new Date();
//alert(d.getDate());