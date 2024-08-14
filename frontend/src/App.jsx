import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useState, useEffect, useRef } from "react";
import preloader from "./assets/preloader.mp4";

function App() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <video
            ref={videoRef}
            src={preloader}
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ) : (
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
