import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatList from './assets/components/StatList'

function App() {

  return (
    <div>
      <h1 className="title">NBA Players</h1>
      <StatList />
    </div>
  )
}

export default App
