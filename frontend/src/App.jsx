import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Prize from "./Pages/Prize"
import Guidelines from "./Pages/Guidelines"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/prize' Component={Prize} />
        <Route path='/guideline' Component={Guidelines} />
      </Routes>
    </Router>
  )
}

export default App
