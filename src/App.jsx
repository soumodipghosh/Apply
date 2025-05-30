import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Job from './components/Job'

const App = () => {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/jobs' element={<Job/>} />
      </Routes>
      </BrowserRouter>
    
    
  )
}

export default App
