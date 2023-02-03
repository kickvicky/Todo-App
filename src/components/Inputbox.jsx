import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

function Inputbox(props){

    const [inputContent, setContent] = useState({todoTitle : "", todoDesc : "", todoLabel : "", todoDue : "", stateValue : false});
    // const addElement = <FontAwesomeIcon icon={faSquarePlus} className='icons'/>;

    function updateContent(event){
        let {name, value} = event.target;
        setContent(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
        // console.log(inputContent);
    }

    return <div class="input-group">
                <span class="input-group-text">Enter todo contents</span>
                <input type='text' onChange={updateContent} placeholder='Todo Title' name='todoTitle' class="form-control input-box" value={inputContent.todoTitle} />
                <input type='text' onChange={updateContent} placeholder='Description' name='todoDesc' class="form-control input-box" value={inputContent.todoDesc}/>
                <input type='text' onChange={updateContent} placeholder='Label' name='todoLabel' class="form-control input-box" value={inputContent.todoLabel}/>
                <input type='date' onChange={updateContent} placeholder='Due Date' name='todoDue' class="form-control input-box" value={inputContent.todoDue} />
                <button type="button" onClick={() => {
                    let contentData = inputContent;
                    //setContent({todoTitle : "", todoDesc : "", todoLabel : "", todoDue : ""});
                    props.addItem(contentData);
                    }} class="btn btn-primary">Create ToDo </button>
           </div>
}

export default Inputbox;