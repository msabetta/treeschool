/*
Crea una pagina HTML con diversi elementi (div o paragrafi).
Implementa la logica JavaScript per cambiare il colore di sfondo di ciascun elemento 
quando il mouse passa sopra e ripristinarlo quando il mouse esce. 
*/
function mouseOver(tag) {
    cambiaColore(tag, "red");
}


function mouseLeave(tag) {
    cambiaColore(tag, "transparent");
}

function cambiaColore(id, colore) {
    let elemColore = document.getElementById(id);
    elemColore.style.backgroundColor = colore;
}
