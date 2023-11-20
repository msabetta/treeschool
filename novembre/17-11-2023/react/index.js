const CiaoComponent = (props) => {
    return (
        <div>Ciao Sono Mario</div>
    )
}

// i componenti react sono usualmente scritti sotto forma di arrow function
//COMMENTARE LA FUNZIONE!! SE ESEGUITE IL FOGLIO COSì SI ROMPE
const CiaoComponent2 = (props) => {
    return (
        <ul>
            {props.dataList.map(function (name) {
                return <li>{name}</li>
            })}
        </ul>
    )
}

// versione alternativa di CiaoComponent2

function ListComponent(props){
    return (
        <ul>
            {props.dataList.map(function (name) {
                return <li>{name}</li>
            })}
        </ul>
    )
}
// COLT STEELE



