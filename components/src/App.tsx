import DesignEinstellungen from './components/settings/settings'
import Button from './components/Button/Button'
import './App.css'
import { getTheme, setMode } from './components/theme/theme'



const App = () => {
  setMode("light")
  console.log(getTheme)
  return (
      <>
        <h2>Hey</h2>
        <Button backgroundColor='#00000'  text="Hey"/>
        
      </>
  )
}

export default App
