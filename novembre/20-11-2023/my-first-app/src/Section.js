import React from 'react';


/* import React from 'react'

function Section(props) {

    // per evitare undefined, mettiamo stringa vuota come valore alternativo
    const additionalClass = props.className || ""

    function checkIsFavouriteSection() {
        return props.title === "React Props"
    }

    return (
        <section
            className={"reusable-section " + props.className}
            onClick={function () {
                if (checkIsFavouriteSection()) {
                    alert("ottimo argomento")
                }
                props.onClick()
            }}
            style={{ border: "3px solid red" }}
        >
            {checkIsFavouriteSection() ? <h1>Sezione preferita</h1> : null}
            <h1>{props.title}</h1>
            {props.children}
        </section>
    )

}

export default Section
 */


function Section(props) {

    // per evitare undefined, mettiamo stringa vuota come valore alternativo
    const additionalClass = props.className || "";
    //const additionalText = "altro testo" || "";


    function checkIsFavouriteSection() {
        return props.title === "React Props";
    }

    /*
    Creare un componente che accetti un contenuto props.children 
    e che se è presente il children mostri anche un elemento p con del testo che arrivi da un'altra prop 
    ( additionalText )
    */

/*     function IsChildrenPresent(props,section) {
        if (section in props.children) {
            return (
                <>
                    {section}
                    <p>{additionalText}</p>
                </>
            );
        }
        
    } */


    return (
        <section
            className={"reusable-section" + additionalClass}
            onClick={function () {
                if (checkIsFavouriteSection()) {
                    alert("ottimo argomento");
                }
                // props.onClick();
            }}
            style={{border: "3px solid red"}}
        >
            {checkIsFavouriteSection() ? <h1>Sezione preferita</h1> : null}
            {/*   null: non mostrare markup sulla pagina web */}
          {/*   {IsChildrenPresent(props,<p>altro testo</p>)} */}
            <h1>{props.title}</h1>
            {props.children}
        </section>
    );
}

export default Section;