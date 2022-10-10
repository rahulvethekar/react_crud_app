import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'


export default function Nav() {
  let [count,setcount] = useState([])

  useEffect(()=>{
      if (localStorage.getItem('mycart')){
        let arr=JSON.parse(localStorage.getItem('mycart'))
        setcount(arr.length)

      }
  },[])
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Home</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/reg">Registration</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Cart{count>0 && <span>({count})</span>} </Link>
        </li>

        
        
        
          

          
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
