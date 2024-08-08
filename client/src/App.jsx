import { HashRouter, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Elements from './Elements';
import Layout from './Layout';
import Registration from './test/Registration';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Preloader from './Components/Preloader/Preloader';
import Design from './Components/Background/Design';

function App() {

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 5000)
  }, []);

  return (
    <>
      <HashRouter >
        {
          loading
            ?
            <Preloader />
            :
            <>
              <Routes>
                <Route path='/' element={<Elements />} />
                <Route path='/register' element={<Registration />} />
              </Routes>
              <Design />

            </>
        }
      </HashRouter>
    </>
  )
}

export default App
