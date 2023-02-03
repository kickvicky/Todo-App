import React from "react";
import Todonote from "./Todonote";

function Tablebody(props){
    return (
        <tbody>
            {props.todoItemsList.map((todoItem, idx) => {
              return <Todonote Key={idx} id={idx} title={todoItem.todoTitle} desc={todoItem.todoDesc} label={todoItem.todoLabel} dueDate={todoItem.todoDue} removeItem = {props.itemDelete} editItem = {props.itemEdit} changeState = {props.changeState} stateValue = {props.stateValue} />
            })}
        </tbody> 
    )
}

export default Tablebody;