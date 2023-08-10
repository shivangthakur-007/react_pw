// import './App.css'
import { useState } from "react"
function App() {
  const [todos]= useState(['todo1', 'todo2'])
  return (
    <>
     Hello
    {todos.map((v, idx)=> <li key={idx}>{v}</li>)}
    </>
  )
}

export default App
