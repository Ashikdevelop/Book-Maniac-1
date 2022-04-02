import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import About from './Components/About/About'
import HomePage from './Components/Home/HomePage'

function App() {
  return (
    <BrowserRouter>

    <div>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="about" element={<About/>} />
      </Routes>
    </div> 
    </BrowserRouter>
   
  )
}

export default App