import React, {useState} from "react";

function Search(props){

    //Search state & function
    const [searchText, setSearchText] = useState('');

    function trackSearch(event){
        let {value} = event.target;
        setSearchText(value);
      }

    return (
    <div style={{textAlign:"center"}}>
        <input type='text' onChange={trackSearch} placeholder='Search' name='todoSearch' class="form-control search-input" value={searchText} />
        <button  type="button" class="btn btn-primary" onClick={() => props.searchTodo(searchText)}>Search 🔍</button>
    </div>)
}

export default Search;