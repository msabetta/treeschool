const nuovo_titolo = "Nuovo Titolo Modificato";
let container = document.createElement('list');

function modificaTesto(id)
{
/*     
    let element_titolo = document.getElementById("titolo");
    element_titolo.innerText = nuovo_titolo; */
    document.getElementById(id).innerText = nuovo_titolo;
}

function modificaTestoIdMultipli(id1,id2,id3){
    document.getElementById(id1).innerText = nuovo_titolo;
    document.getElementById(id2).innerText = nuovo_titolo;
    document.getElementById(id3).innerText = nuovo_titolo;
}

function createList(){
/*     let list = document.createElement('ul');
    list.appendChild('li').innerHTML = "Nuovo Elemento";
    list.appendChild('li').innerHTML = "Nuovo Elemento 2";
    list.appendChild('li').innerHTML= "Nuovo Elemento 3"; */
    
    //aggiungiElemento('ul','li',"Nuovo Elemento");
    //rimuoviElemento('li');

    //addItem()

    let container = document.createElement('list');
/*     let node1 = document.createElement('li');
    node1.textContent = "Nuovo Elemento";
    container.appendChild(node1); */

    aggiungiElemento(container, "li", "Nuovo Elemento");
/* 
    let node2 = document.createElement('li');
    node2.textContent = "Nuovo Elemento";
    container.appendChild(node2); */
/* 
    let node3 = document.createElement('li');
    node3.textContent = "Nuovo Elemento";
    container.appendChild(node3); */



/*     let child = container.appendChild('li'); */
    //child.innerText = "Nuovo Elemento";

}


function aggiungiElemento(){
    //document.createElement(tag_name).innerText = text;
    //let contenitore = document.getElementsByTagName("list");
    let node = document.createElement('li');
    node.textContent = "Nuovo Elemento";
    container.appendChild(node);
}



function rimuoviElemento(){
    //let contenitore = document.getElementsByTagName("list");

    let elementoDaRimuovere = container.lastElementChild;

    container.removeChild(elementoDaRimuovere);
}


 // Function to add items to the list dynamically
 /* function addItem() {
    // Get the unordered list element by its ID
    var myList = document.getElementById("myList");

    // Create a new list item
    var newItem = document.createElement("li");

    // Set the text content of the list item
    newItem.textContent = "Item " + (myList.children.length + 1);

    // Append the new list item to the unordered list
    myList.appendChild(newItem);
}

// Example: Add items to the list when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Add three items to the list on page load
    addItem();
    addItem();
    addItem();
});


 */


//

function modificaStile(){
    var riquadroElement = document.getElementById("riquadro");
    riquadroElement.style.backgroundColor = "#3498db";
    riquadroElement.style.color = "#ffffff";
}