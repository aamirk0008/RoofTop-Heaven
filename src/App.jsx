import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import MyFooter from './components/MyFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <MyFooter/>
    
    </>
  )
}

export default App
