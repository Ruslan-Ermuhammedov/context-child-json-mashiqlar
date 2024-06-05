import { useState } from 'react'
import Navbar from './loyaut/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Basket from './pages/Basket/Basket'
import Card from './pages/Card/Card'
import Edit from './pages/Edit/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='basket' element={<Basket />} />
        <Route path='card' element={<Card />} />
        <Route path='edit' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
