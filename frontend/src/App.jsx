import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </Router>
  )
}

export default App
