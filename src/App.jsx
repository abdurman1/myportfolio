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
        <div className='toggleBtn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="100" viewBox="50 50 200 200"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
        </div>
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
      <div className="contact-form">
        form
      </div>
    </>
  )
}

export default App
