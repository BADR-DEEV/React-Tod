import React from "react";


//main function is to map throught the to do and display them 
const ToDo = (props) => {

    console.log(props.value)
    return(
        <ul>

            {props.value.map((x) => (<li> {x} </li>))}
    </ul>
     
        )
}

export default ToDo;