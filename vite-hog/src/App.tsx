import { useState } from 'react'
import './App.css'

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
