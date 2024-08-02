import './App.css'
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'


function App() {
    let [foodItems, setfoodItems] = useState([]);

  const onKeyDown = (e) =>{
    if(e.key === "Enter"){
      let newFoodItem = e.target.value;
      e.target.value="";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
      console.log("Food value is entered: "+ newFoodItem);
    }
  };

  
  return(
   <>
    <Container>
      <h1 className='foodHeading'>healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items= {foodItems}/>
      <FoodItems items ={foodItems}  />


    </Container>
    <Container>
      <p>Above is the list of healthy foods that are good for your healthy
        and well being
      </p>
    </Container>
    </>
  )
}

export default App
