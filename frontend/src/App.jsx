import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Gallery from "./components/Gallery/Gallery"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="app/Gallery" Component={Gallery} />
      </Routes>
    </Router>
  )
}

export default App
