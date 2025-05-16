import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Abdurrahman Abuoun</h1>
        <nav>
          <ul>
            <li><a href="#">Github</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
      
      <div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
