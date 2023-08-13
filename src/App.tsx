import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './application/pages/taskView/application/components/mainView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskList/>
    </>
  )
}

export default App
