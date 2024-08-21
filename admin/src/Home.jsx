import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './context/AuthContext'
const Home = () => {
  const {normalUser,admin,credError,logUser} = useContext(AuthContext)
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  return (
    <>
     {normalUser?(
       <div className='container d-flex justify-content-center align-items-center my-5'>
       <form onSubmit={() => logUser(username, password)}>
         <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label">Admin Username</label>
           <input type="text" className="form-control" value={username} required
            onChange={(e) => setUserName(e.target.value)}
           id="exampleFormControlInput1" placeholder="Username" />
         </div>
         <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label">Admin password</label>
           <input type="password" required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           className="form-control" id="exampleFormControlInput1" placeholder="password" />
         </div>
         <div className="mb-3">
           <button type='submit'  className='btn btn-primary'>Submit</button>
         </div>
       </form>
       </div>
     ):(
        <div className='container my-5 d-flex justify-content-center align-items-center'>
          <h1>
            Welcome Admin
          </h1>
        </div>
     )}

    </>
  )
}

export default Home