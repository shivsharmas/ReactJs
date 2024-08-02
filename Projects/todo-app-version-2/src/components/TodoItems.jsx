import TodoItem from './TodoItem';

const TodoItems = ({todoItems}) =>{
  return <>
    <div className="items-conatiner">
      {todoItems.map( item => 
        <TodoItem todoDate={item.duedate} todoName={item.name} />
      )}
 
    </div>
  </>
}

export default TodoItems;