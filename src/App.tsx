import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Career from "./pages/Career.tsx";
import Certificates from "./pages/Certificates.tsx";
import Products from "./pages/Products.tsx";

export default function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/About' element={<About/>}/>
                  <Route path='/Career' element={<Career/>}/>
                  <Route path='/Certificates' element={<Certificates/>}/>
                  <Route path='/Products' element={<Products/>}/>
              </Routes>
          </Router>
      </>

  )
}

