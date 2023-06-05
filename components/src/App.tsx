import DesignEinstellungen from './components/einstellungen/einstellungen'
import Button from './components/Button/Button'
import './App.css'
import DesignProvider from './components/einstellungen/einstellungen'




const App = () => {

  return (
      <>
        <h2>Hey</h2>
        <Button backgroundColor='#00000'  text="Hey"/>
        <DesignEinstellungen textColor='black'   />
        
      </>
  )
}

export default App
