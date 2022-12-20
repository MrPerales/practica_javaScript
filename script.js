const h1= document.querySelector("h1");   //para seleccionar una etiqueta
const p= document.querySelector("p");
const parrafito=document.getElementsByClassNames("parrafito"); ///para seleccionar una clase
const pid=document.getElementById("pid"); ///para seleccionar una clase
const input=document.querySelector("input");
const h2=document.querySelector("h2");

console.log(input.id);



console.log(
       { h1,
        p,
        parrafito,
        pid,
        input}
        );
//h1.innerHTML="holi <br> adios"; ///convierte todo a codigo html
h1.innerText="holi <br> adios"; ///convierte todo a texto
//console.log(h1.getAttribute("pantalla")); /// obtenemos el atributo en este caso el atributo es pantalla
//h2.setAttribute("class", "rojo"); //tipo de atributo que quieres cambiar , el nombre que va a cambiar 
h2.classList.add("rojo"); //le agrega una clase
h2.classList.remove("rojo"); //le quita una clase 

const img= document.createElement("img"); //para crear un elemnto en html en este caso una imagen 
img.setAttribute("src", "https://i.seadn.io/gae/uAJta1YRdB-fhq0Z1ZKB6SuOirVng9PyExwdEZu2Rl7uxDN_YLqgKI-L3egZZ0kWevHSsKVWd3MwOlLdtiDuVnknjcYoyBXTFCUQ?auto=format&w=1000");
console.log(img);

pid.appendChild(img);//insertamos una imafen dentro de pid