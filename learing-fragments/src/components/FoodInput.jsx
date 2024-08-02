import styles from './FoodInput.module.css';

const FoodInput = ({handleKeyDown}) =>{
  
  return <input type="text" placeholder="Add food item " className={`${styles.foodInput}`}
   onKeyDown={handleKeyDown} />
}

export default FoodInput;