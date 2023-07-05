import Button from './components/Button/Button'
import './App.css'
import { getTheme, setMode } from './components/theme/theme'



const App = () => {
  return (
      <>
        <h2>Hey</h2>
        <p></p>
        <Button backgroundColor='black' onPress={() => {alert("Ich wurde gedrückt")}}   text="Hey"/>
      </>
  )
}

export default App
