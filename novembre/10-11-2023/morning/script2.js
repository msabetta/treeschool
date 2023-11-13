const nuovo_titolo = "Nuovo Titolo Modificato";
let list = document.getElementById('list');

/* list.style.display = "block";
list.style.visibility = "visible"; */

//EVENT LISTENER REMOVE ELEMENT
/* const elRemoveElement = document.getElementById("removeElement");
if(elRemoveElement)
{
    elRemoveElement.addEventListener(
        "click", //nome evento che vogliamo ascoltare
        function(){
            debugger;
            console.log('Remove Element button clicked');
            let elementoDaRimuovere = list.lastElementChild;
            //rimuoviElemento(elementoDaRimuovere);     
            list.removeChild(elementoDaRimuovere);   
            console.log('Deleted Element!');
        }
    )
}


//EVENT LISTENER ADD ELEMENT
const elAddElement = document.getElementById("addElement");
if(elAddElement)
{
    elAddElement.addEventListener(
        "click", //nome evento che vogliamo ascoltare
        function(){
            debugger;
            console.log('Add Element button clicked');
            //recuperiamo il valore dell'input
            //const inputTextElement = "Nuovo Elemento";
            // aggiungiamo un elemento con il valore indicato in inputTextElement
            //let elem = aggiungiElemento();
            let elem = document.createElement('li');
            elem.innerText = "Nuovo Elemento";
            elem.style.display = 'block';
            elem.style.visibility = 'visible';
            list.appendChild(elem); 
            console.log('Added element!');
        }
    )
} */


function modificaTestoIdMultipli(id1,id2,id3){
    document.getElementById(id1).innerText = nuovo_titolo;
    document.getElementById(id2).innerText = nuovo_titolo;
    document.getElementById(id3).innerText = nuovo_titolo;
}


function aggiungiElemento(){
    let elem = document.createElement('li');
    elem.innerText = "Nuovo Elemento";
    elem.style.display = 'block';
    elem.style.visibility = 'visible';
    list.appendChild(elem); 
}


function rimuoviElemento(){
    let elemRemove = list.lastElementChild;
    list.removeChild(elemRemove);
}

function modificaStile(){
    var riquadroElement = document.getElementById("riquadro");
    riquadroElement.style.backgroundColor = "#3498db";
    riquadroElement.style.color = "#ffffff";
}






