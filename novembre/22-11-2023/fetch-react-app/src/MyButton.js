function MyButton(props){
    return(
        <button onClick={props.onClick}>{props.children}</button>
    );
}