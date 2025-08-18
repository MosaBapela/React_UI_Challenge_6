import './App.css'

import {Navbar} from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

import { SecondContainer } from './components/SecondContainer/SecondContainer'
import { ThirdContainer } from './components/ThirdContainer/ThirdContainer'
import { FourthContainer } from './components/FourthContainer/FourthContainer'

function App() {

  return (
    <div id='app-container'>
      <div id='scrollable'>
        <Navbar />
       
        <SecondContainer/>
        <ThirdContainer/>
        <FourthContainer/>

      </div>
       <Footer />
    </div>
  )
}

export default App
