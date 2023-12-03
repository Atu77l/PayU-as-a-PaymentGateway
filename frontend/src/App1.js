import React from 'react'
import Success from './Success'
import Failure from './Failure'
import App from './App'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


const App1 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/success' exact element={<Success/>}/>
      <Route path='/failure' exact element={<Failure/>} />
     
    </Routes>
  </BrowserRouter>
  )
}

export default App1