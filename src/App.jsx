import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pet from './Pet'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  )
}

export default App
