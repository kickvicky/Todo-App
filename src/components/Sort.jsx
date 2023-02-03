import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSort} className='icons' />

function Sort(props){
    return <div className="sort-box">
        <button type="button" class="btn btn-warning" onClick={() => props.sortItems()}>Sort Todo's {element}</button>
        <button type="button" class="btn btn-danger" onClick={() => props.clearItems()}>Clear Todo's</button>
    </div>
}

export default Sort;