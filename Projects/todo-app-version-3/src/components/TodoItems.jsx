import { TodoItemContext } from '../store/todo-item-store';
import { useContext } from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ onDeleteClick}) =>{

  const { todoItems } = useContext(TodoItemContext);

  return <>
    <div className="items-conatiner">
      {todoItems.map( item => 
        <TodoItem key={item.name}  todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick} />
      )}
 
    </div>
  </>
}

export default TodoItems;