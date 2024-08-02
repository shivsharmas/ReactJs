import { useState, useRef, useContext } from "react";
import { TiDocumentAdd } from "react-icons/ti";
import { TodoItemContext } from "../store/todo-item-store";

const AddTodo = () =>{

  const {addNewItem} = useContext(TodoItemContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  // const todoNameElement = useRef();
  // const dueDateElement = useRef();


  function handleNameChange(event){
    setTodoName(event.target.value)
  }
  
  function handleDateChange(event){
    setDueDate(event.target.value)
  }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // const todoName = todoNameElement.current.value;
    // const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate)

    setTodoName("")
    setDueDate("")
  }



  return(
    <div className="container text-center">

      <form className="row kg-row" 
          onSubmit={handleAddButtonClicked}>
        
        {/* input name field */}
        <div className="col-6">
          <input type="text" 
          value={todoName}
          // ref={todoNameElement}
          onChange={handleNameChange}
          placeholder="Enter your todo work"  />
        </div>

        {/* date field  */}
        <div className="col-4">
          <input type="date" 
          value={dueDate}
          onChange={handleDateChange}
         
          // ref={dueDateElement}
          />
        </div>

        {/* button feild */}
        <div className="col-2">
          <button type="submit" className="btn btn-success" >
          <TiDocumentAdd />
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddTodo;