//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import {Text} from './components/Text/Text'
import {Navbar} from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { FirstContainer } from './components/FirstContainer/FirstContainer'
import { SecondContainer } from './components/SecondContainer/SecondContainer'
import { ThirdContainer } from './components/ThirdContainer/ThirdContainer'
import { FourthContainer } from './components/FourthContainer/FourthContainer'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
        <FirstContainer />
        <SecondContainer/>
        <ThirdContainer/>
        <FourthContainer/>

      </div>
       <Footer />
    </div>
  )
}

export default App
