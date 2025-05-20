let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputNum3 = document.querySelector("#inputNum3");
let h3Resultado = document.querySelector("#h3Resultado")
let btCalcular = document.querySelector("#btCalcular")

function CalcularMedias(){
    let vlr1 = Number(inputNum1.value);
    let vlr2 = Number(inputNum2.value);
    let vlr3 = Number(inputNum3.value);

    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    let mediaPonderada = ((vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5)) / (3 + 2);

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = "Media Aritmetica:" +mediaAritmetica+"</br>"+
                            "Media Penderada:" +mediaPonderada+"</br"+
                            "Soma das Medias:" +somaMedias"</br"+
                            "Media das Medias:" +mediaMedias"</br"+
 
}

btCalcular = function (){
    CalcularMedias();
}