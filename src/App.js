import './App.css'
import { useEffect, useState } from 'react'
import Countries from './components/Countries/Countries'

function App() {
  return (
    <div className="App">
      <h1>Country Flag</h1>
      <div>
        {/* <CountryLoad /> */}
        <Countries />
      </div>
    </div>
  )
}

export default App
