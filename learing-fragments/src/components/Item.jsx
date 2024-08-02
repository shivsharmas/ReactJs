import styles from "./Item.module.css";


const Item = ({foodItems, bought, handleBuyButton}) => {

  // let {foodItem} = props; 
  return (
    <li className={`${styles["kg-items"]} list-group-item ${bought && 'active'}`}>
      <span className={styles["kg-span"]}></span>{foodItems}

      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}
      >Buy</button>
    </li>
  )
};

export default Item;