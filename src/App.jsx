import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <h1>Abdurrahman Abuoun</h1>
        <ul>
            <li><a href="#">Github</a></li>
            <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
      <div className='intro'>
        <h2>Hi I'm a <span>Frontend Developer!</span></h2>
        <h1>Abdurrahman Abuoun</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda veniam cum nemo, mollitia vero magnam explicabo eos tempora vitae saepe nihil, corrupti quas ullam quos blanditiis excepturi perspiciatis ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam dicta dignissimos. Nostrum nesciunt eius quidem voluptatem laborum, dolores itaque consequuntur suscipit dolorum unde! Id sapiente excepturi sunt alias quas!</p>
        <div className='button'>
          <button><a href="#"></a>Projects</button>
          <button className='blue'><a href="#"></a>Contact</button>
        </div>
      </div>
      <div className='projects'>
        <h1>Projects</h1>
        <div>
          <h2>Ex 1</h2>
          <img src="" alt="" />
        </div>
        <div>
          <h2>Ex 2</h2>
          <img src="" alt="" />
        </div>
      </div>
      <div className='contact'>

      </div>
    </>
  )
}

export default App
