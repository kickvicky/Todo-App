import React, { useState } from "react";

function Todonote(props){

    const [stateValue, setStateValue] = useState(false);

    function changeState(){
        setStateValue(!stateValue);
    }

    return (
        <tr>
            <th scope="row">{props.id + 1}</th>
            <td value={props.title}>{props.title}</td>
            <td>{props.desc}</td>
            <td>{props.label}</td>
            <td>{props.dueDate}</td>
            <td><button type="button" class={stateValue ? "btn btn-success" : "btn btn-danger"}  onClick={changeState}>{stateValue ? ("Completed") : ("Pending")}</button></td>
            <td><button type="button" class="btn btn-primary" onClick={() => props.editItem(props.id)}>Edit</button>x
            <button type="button" class="btn btn-danger" onClick={() => props.removeItem(props.id)} >Delete</button></td>
        </tr>
    )
}

export default Todonote;