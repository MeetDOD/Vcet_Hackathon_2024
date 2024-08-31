import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import Registration from "./Pages/Registration";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Lottie from 'react-lottie';
import loader from "./assets/lottie/loader.json"
import StarsCanvas from "./components/StarBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const isDevMode = import.meta.env.VITE_DEV_MODE == "true";

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4250);

    return () => clearTimeout(timer);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader
  };

  return (
    <Router>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="relative w-full h-screen">
            <StarsCanvas />
            <Lottie options={defaultOptions} />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/register" Component={Registration} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
