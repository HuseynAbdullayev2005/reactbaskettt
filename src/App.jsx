import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './layout/navbar'
import Mainlayout from './layout/mainlayout'
import Basket from './pages/basket'
import Home from './pages/home';
import Whislist from './pages/whislist';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
        
          <Route path="basket" element={<Basket />} />
          
          <Route path="whislist" element={<Whislist />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
