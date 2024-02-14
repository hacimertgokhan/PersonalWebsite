import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";

export default function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/About' element={<About/>}/>
              </Routes>
          </Router>
      </>

  )
}

