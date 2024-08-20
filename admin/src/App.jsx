import { useState } from 'react'
import TeamDash from './dasboard/TeamDash'
import Navbar from './components/navbar'
import UserDash from './dasboard/UserDash'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import { AuthProvider } from './context/AuthContext';
import SelectedTeam from './dasboard/SelectedTeam'



function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home/>},
        { path: '/team-dash', element: <TeamDash /> },
        { path: '/user-dash', element: <UserDash /> },
        { path: 'selected-teams', element: <SelectedTeam/>}
       
      ]
    },

  ]);
  return(
    <>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
     
    </>
  )
}

export default App
