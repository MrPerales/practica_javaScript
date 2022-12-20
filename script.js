const h1= document.querySelector("h1");   //para seleccionar una etiqueta
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const btn= document.querySelector("btnCalcular");
const pResultado=document.querySelector("#resultado");

function btnOnClick(){
    const sumaImputs= Number(input1.value) + Number(input2.value);
    pResultado.innerText= "resultado: " + sumaImputs;
}