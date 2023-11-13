window.onload = function(){
    //let ele = document.getElementById("testo");
    //console.log(ele); 

/*     document.getElementById("testo").onclick = function(){
        console.log("test");
        //alert("Benvenuto");
    } */
    document.getElementById("onMouseEvent").onmouseover = function(){
        //alert("SONO SUL ELEM");
        console.log("sono entrato");
    }

    document.getElementById("onMouseEvent").onmouseout = function(){
        console.log("sono uscito");
    }

    document.getElementById("testoKey").onkeypress = function(){
        console.log(this.value);
    } 
    document.getElementById("effettoBlur").onblur = function(){
        console.log("ok");
    } 
    document.getElementById("effettoBlur").onfocus = function(){
        console.log("sono dentro");
    } 

    selezionaAuto = function(){
        let valore = document.getElementById("mySelect").value;
        console.log(valore);
    }


    document.getElementById("testo").onclick = function(){
  /*       let ele = document.getElementById("testo2"); */
        let ele = document.getElementById("testo");
        //ele.innerHTML = "<h2>TEST 2</h2>";
        ele.style.color = "red";
        ele.style.fontSize = "30px";
    }
}

/* let button = document.getElementById("btn");

button.onclick = function ClickButton(){
    alert("Benvenuto!");
}

let button2 = document.getElementById("on-mouse-over-event");

button.onmouseover = function OnMouseOver(){
    console.log("Sono entrato...")
}

let button3 = document.getElementById("on-mouse-out-event");

button.onmouseout = function OnMouseOut(){
    console.log("Sono uscito...")
}


let select = document.getElementById("mySelect");


select.onchange = function OnChange(){
    console.log(select.getElementById('option').value)
}


 */




