import styles from './ButtonContainer.module.css';

const ButtonContainer = ({onButtonClick}) =>{
  const buttonsName = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '0', '+', '/', '-', '*', '%','=', '.' 
  ]
  

  return <>
          <div className={styles.buttonContainer}>
            {buttonsName.map((buttonsNames) =><button key={buttonsNames} type='button' className={styles.button} onClick={() => onButtonClick(buttonsNames)} >{buttonsNames}</button> )}
            

        </div>

  </>
}

export default ButtonContainer;