addList = function(){
    //creo ul e li
    let ul1 = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    //
    let ul2 = document.createElement('ul');
    let li21 = document.createElement('li');
    let li22 = document.createElement('li');
    let li23 = document.createElement('li');
    // inserisco nomi
    li1.textContent = "PRIMO ELEMENTO";
    li2.textContent = "SECONDO ELEMENTO";
    li3.textContent = "TERZO ELEMENTO";
    //
    li21.textContent = "CIAO";
    li22.textContent = "MONDO";
    li23.textContent = "SOLE";

    // inserisco gli li all'interno di ul
    ul1.append(li1,li2,li3);
    // inserisco gli li all'interno di ul
    ul2.append(li21,li22,li23);
    // inserisco ul nella lista con id list
    document.getElementById("list").append(ul1,ul2);

    let list = document.getElementById("list");
    //stampa elenco delle classi
    list.classList.forEach(el => console.log(el));
    list.classList.add("esempioAdd");

    let listChildren = list.childNodes;
    console.log(listChildren);
    listChildren[0].classList.add("prova"); //aggiungo la classe prova ad ul
    listChildren[1].classList.add("test"); //aggiungo la classe prova ad ul

}


addDiv = function(){
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = "Esempio di paragrafo";
    div.appendChild(p);
    document.getElementById('testID').append(div);
}


addList();
addDiv();


//ul li li li