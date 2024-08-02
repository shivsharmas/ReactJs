import styles from './ButtonContainer.module.css';

const ButtonContainer = () =>{
  const buttonsName = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '0', '+', '/', '-', '*', '%','=', '.' 
  ]
  return <>
          <div className={styles.buttonContainer}>
            {buttonsName.map((item) =><button type='button' className={styles.button}>{item}</button> )}
            

        </div>

  </>
}

export default ButtonContainer;