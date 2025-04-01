//import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return <MantineProvider>{
    
      (
        <>
          <h1>Hello Hog!</h1>
          <div className="card">
          </div>
          <p>
            No more button to hog++. Sad.
          </p>
        </>
      )
  
  }</MantineProvider>;
}





{/*

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Hog!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hogcount is {count} 🦔
        </button>
      </div>
      <p>
        Click on the button to hog++
      </p>
    </>
  )
}

export default App

*/}