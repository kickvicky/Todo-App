import { useState, useEffect } from "react";
import Header from "./components/Header";
import Inputbox from "./components/Inputbox";
import Sort from "./components/Sort";
import Editbox from "./components/Editbox";
import Tableheader from "./components/Tableheader";
import Search, {setSearchText} from "./components/Search"
import Tablebody from "./components/Tablebody";
import './index.css'

const win = window.localStorage;

const getLocalItems = () => {
  let list = win.getItem("content");
  console.log(list);

  if(list){
    return JSON.parse(win.getItem("content"));
  }
  else{
    return [];
  }
}

function App() {

  const [todoItems, setNewItem] = useState(getLocalItems());
  const [isEditing, setEditing] = useState(false);
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    win.setItem("content",JSON.stringify(todoItems));
  },[todoItems]);


  function addTodoItem(todoContent){
    console.log(todoContent);
    setNewItem(prevValue => {
      return [
        ...prevValue,
        todoContent
      ]
    })
    // console.log(todoItems);
  }

  // Delete a todo item
  function itemDelete(id){
    //console.log("Pressed", id);
    const newTodoItems = todoItems.filter((todo, idx) => {
      return idx !== id;
    })
    setNewItem(newTodoItems);
  }

  // Edit a todo item
  function itemEdit(ID){
    // console.log("Pressed", id);
    // itemDelete(ID);
    todoItems.map((value,idx) => {
      if(idx === ID){
        setEditItem(value);
        console.log(value);
      }
    });
    setEditing(true);
    itemDelete(ID);
  }

  function editTodoItem(todoContent){
     addTodoItem(todoContent);
     setEditing(false);
  }

  // To sort todo items
  function sortTodos(){
    const sorted = [...todoItems].sort((todoItem1, todoItem2) => {
      if(todoItem2.todoDue < todoItem1.todoDue)return 1;
      else if(todoItem2.todoDue > todoItem1.todoDue)return -1;
      return 0;
    });
    setNewItem(sorted);
    console.log(sorted);
  }

  function clearTodos(){
    setNewItem([]);
  }

  // Search for a todo item
  function searchTodo(searchText){
    // Searching for the item
    const searchedItem = todoItems.find((todoItem, idx) => {
      return todoItem.todoTitle === searchText;
    });
    if(searchedItem === undefined){
      console.log("Oops Requested Todo not present!!");
      return;
    }
    const swe = todoItems.filter((todoItem, idx) => {
      return todoItem.todoTitle !== searchedItem.todoTitle;
    });

    setNewItem(swe);
    setNewItem(prevValue => {
      return [
        searchedItem,
        ...prevValue
      ]
    })
  }

  function changeStatus(ID){
    // console.log(ID);
    // todoItems.forEach((item,idx) => {
    //   if(idx === ID){
    //     item.stateValue = !item.stateValue;
    //   }
    // })
    // console.log(todoItems);
    // setNewItem(todoItems);
  }

  return (
    <div >
      <Header />
      {!isEditing ? <Inputbox addItem = {addTodoItem} changeState = {changeStatus} /> : <Editbox item = {editItem} addItem = {editTodoItem}/> }
      <Search searchTodo={searchTodo}/>
      <Sort sortItems = {sortTodos} clearItems={clearTodos}/>
      <table class="table">
          <Tableheader />
          <Tablebody changeState={changeStatus} todoItemsList = {todoItems} itemDelete = {itemDelete} itemEdit = {itemEdit} />
      </table>
      
    </div>
  );
  
}

export default App;
