'use strict'


var usuarios = document.querySelector('.padre');
var texto = document.querySelector('.padre').innerHTML 
const elementoPadre = document.querySelector('.padre')
document.querySelector('#boton').addEventListener('click',traerDatos);
function traerDatos() {
    
    fetch('https://www.reddit.com/r/AskReddit/.json')
	.then(response => response.json())
	.then(response => {
       

        for (let i = 0; i < 10; i++) {
            usuarios = response.data.children[i].data.title
            const myJASON = JSON.stringify(usuarios);
            const parrafoCuatro = document.createElement('p')
            const textoParrafo = document.createTextNode(myJASON)
            elementoPadre.appendChild(parrafoCuatro)
            parrafoCuatro.appendChild(textoParrafo)
            console.log(usuarios);
        }

        

    })
	.catch(err => console.error(err));


}




