import AddTodo from './AddTodo';
import './App.css'
import AppName from './components/AppName';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItems from './components/TodoItems';

function App() {

  const todoItems = [
  {
    name : "Buy Milk",
    duedate : "04/10/2023"
  },
  
  {
    name : "College Fees",
    duedate : "05/06/2024"
  },

  {
    name : "Exam start",
    duedate : "05/06/2024"
  },

]
  return (
    <>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems ={todoItems}/>
    </center>

    </>
  )
}

export default App
