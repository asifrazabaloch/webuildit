import { react, useState } from 'react'
import { BrowserRouter,Route,Routes ,NavLink} from "react-router-dom"
import './App.css'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/notfound'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />     
     </Routes>
    </BrowserRouter>
  )
 
}
import "./animate.js"

export default App
