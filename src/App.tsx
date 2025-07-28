import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from './components/Text/Text'
import {Navbar} from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
       <Text variant = 'h1'> Hi There</Text>
       <Text variant = 'h2'> Hi There</Text>
       <Text variant = 'p'> Hi There</Text>
       <Text variant = 'span'> Hi There</Text>
    </>
  )
}

export default App
