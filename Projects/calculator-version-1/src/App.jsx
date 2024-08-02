import styles from './App.module.css';
import ButtonContainer from './components/ButtonContainer';
import InputDisplay from './components/InputDisplay';

function App() {

  return (
    <>
      <div className={styles.calculator}>
          <InputDisplay />
          <ButtonContainer />
      </div>
    </>
  )
}

export default App
