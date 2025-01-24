import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import State from './component/State'
import ApiGet from './component/ApiGet'
import Product from './component/Product'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Counter/> */}
   {/* <State></State> */}
   {/* <ApiGet/> */}
   {/* <Product></Product> */}
   <Navbar/>
    <Routes>
      <Route path="/r" element={<ApiGet/>}/>
      <Route path="/v" element={<Counter/>}/>
      <Route path="/b" element={<State/>}/>
      <Route path="/n" element={<Product/>}/>



    </Routes>
  
    </>
  )
}

export default App
