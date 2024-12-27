import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'

function App() {


  return (
    <div style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "left" }}>
      <Currency />
    </div>
  )
}

export default App
