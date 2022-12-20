const h1= document.querySelector("h1");   //para seleccionar una etiqueta
const input1=document.querySelector("#calculo1");
const input2=document.querySelector("#calculo2");
const btn= document.querySelector("btnCalcular");
const pResultado=document.querySelector("#resultado");

const opcSuma=document.querySelector("#suma");
const opcResta=document.querySelector("#resta");
const opcDiv=document.querySelector("#division");
const opcMulti=document.querySelector("#multiplicacion")

function btnOnClick(){

    if (opcSuma.checked){     ////.checked para verificar si esta precionado o no 
        const sumaImputs= Number(input1.value) + Number(input2.value);
        pResultado.innerText= "resultado: " + sumaImputs;
        //console.log("suma");
    
    }else if (opcResta.checked){
        const sumaImputs= Number(input1.value) - Number(input2.value);
        
        pResultado.innerText= "resultado: " + sumaImputs;
        //console.log("r");
    }else if (opcDiv.checked){
        const sumaImputs= Number(input1.value) / Number(input2.value);
        pResultado.innerText= "resultado: " + sumaImputs;
        //console.log("d");

    }else if (opcMulti.checked){
        const sumaImputs= Number(input1.value) * Number(input2.value);
        pResultado.innerText= "resultado: " + sumaImputs;
        //console.log("m");
    }
    
   //const sumaImputs= Number(input1.value) + Number(input2.value);
 // pResultado.innerText= "resultado: " + sumaImputs;
}