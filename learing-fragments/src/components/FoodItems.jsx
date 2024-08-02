import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) =>{

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  }

return (
  <ul className='list-group'>
  {items.map(item => 
    <Item 
    key={item}
     foodItems={item}    // Pass foodItem instead of foodItems
      bought={activeItems.includes(item)}
      handleBuyButton={() => onBuyButton(item)} />
  )}
</ul>

)

}

export default FoodItems;