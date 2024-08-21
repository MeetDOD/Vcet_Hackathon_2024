import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {admin,logOut} = useContext(AuthContext)

  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Hackathon Dashboard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team-dash">Team Dashboard</Link>
        </li><li className="nav-item">
          <Link className="nav-link" to="/user-dash">User Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/selected-teams">Selected Teams</Link>
        </li>
        <li className="nav-item">
          {admin?(<Link className="nav-link btn btn-danger" onClick={() => logOut()}>Logout</Link>):<></>}
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar