import { useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TodoItemContext } from "../store/todo-item-store";


const TodoItem = ({todoName, todoDate }) =>{
  // const onDeleteClick = (event) => {
  //   console.log(event.target.value)
  // };

  const {deleteItem} = useContext(TodoItemContext);
    return(
      <div className="container">
        <div className="row kg-row">
          <div className="col-6">{todoName}</div>
          
          <div className="col-4">{todoDate}</div>

          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" 
            onClick={() => deleteItem (todoName)}><RiDeleteBin6Fill /></button>
          </div>

        </div>
      </div>
    )
};

export default TodoItem;