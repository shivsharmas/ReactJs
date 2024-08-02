import { useContext } from 'react';
import styles from './WelcomeMessage.module.css';
import { TodoItemContext } from '../store/todo-item-store';

const WelcomeMessage = () =>{
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.todoItems;   
 
  return (todoItems.length===0 &&  <p className={styles.paragraph}>Welcome, Enjoy your day</p>
  );
};

export default WelcomeMessage;