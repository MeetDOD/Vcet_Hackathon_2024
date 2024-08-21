import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import preloader from "./assets/MainComp.mp4";

function App() {
  const [loading, setLoading] = useState(true);
  const isDevMode = import.meta.env.VITE_DEV_MODE == "true";


  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);



  return (
    <Router>
      {/* {loading ? (
        <div className="flex justify-center items-center h-screen">
          <video
            src={preloader}
            autoPlay
            loop
            muted
            className="hidden lg:block w-full h-full object-cover"
          />
          <div className="lg:hidden flex justify-center items-center">
            <p className="text-xl">Loading...</p>
          </div>
        </div>
      ) : (
      )} */}
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
