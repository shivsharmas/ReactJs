import { useState } from 'react';
import styles from './App.module.css';
import ButtonContainer from './components/ButtonContainer';
import InputDisplay from './components/InputDisplay';

function App() {
  const [calVal, setCalVal] = useState("");
  
  const onButtonClick = (buttonText) =>{
    if(buttonText === "C"){
      setCalVal("")
    }else if(buttonText === "="){
      const result = eval(calVal);  
      setCalVal(result);
    } else{
        const newItems = calVal + buttonText;
          setCalVal(newItems);
        }
    }
  

  return (
      <>
      <div className={styles.calculator}>
          <InputDisplay displayValue={calVal} />
          <ButtonContainer onButtonClick = {onButtonClick} />
      </div>
    </>
  )
}

export default App
