utenti = new Array();
function aggiungiUtente() {
    let nome = document.getElementById("name").value;
    console.log(nome);
    let surname = document.getElementById("cognome").value;
    let city = document.getElementById("city").value;
    //console.log(nome,cognome, city);
    utenti.push(nome + " " + surname + " " + city);
    console.log(utenti);
}