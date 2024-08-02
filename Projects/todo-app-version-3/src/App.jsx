import AddTodo from './components/AddTodo';
import './App.css'
import AppName from './components/AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItems from './components/TodoItems';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemContext } from './store/todo-item-store';

function App() {

 

const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // const newTodoItems = [...todoItems, {name:itemName, dueDate:itemDueDate}];
    // setTodoItems(newTodoItems)

    setTodoItems((currValue) => [
      ...currValue, {name : itemName, dueDate : itemDueDate}
    ])

  }

  const deleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems)

  }


  return (
    
    <TodoItemContext.Provider 
      value={{
        todoItems: todoItems,
          addNewItem : addNewItem,
          deleteItem : deleteItem,
      }}>
    
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage />
      
      <TodoItems/>
    </center>
    </TodoItemContext.Provider>
   
  )
}

export default App
