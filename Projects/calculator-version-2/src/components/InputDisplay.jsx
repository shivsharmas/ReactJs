import styles from "./InputDisplay.module.css";

const InputDisplay = ({displayValue}) =>{

  return(
    <>
    <input  className={styles.display} type="text" value={displayValue} readOnly />
    </>
  )

}

export default InputDisplay;