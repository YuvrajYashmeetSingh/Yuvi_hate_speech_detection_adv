import React from 'react'

import { useLocation,Link } from 'react-router-dom';
const Header = () => {
    const location = useLocation();

    const isActive = (path) => {
      return location.pathname === path ? 'nav-link active' : 'nav-link';
    };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light  fixed-top"  style={{ backgroundColor:"antiquewhite"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">YuVi</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={isActive("/")} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/about")} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/contact")} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/hate-speech")} to="/hate-speech"> Text Detection</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/speech")} to="/speech">Speech Detection</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive("/file")} to="/file">File Detection</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header