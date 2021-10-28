import React from 'react'
import './nav.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";

const Nav = () => {
       const getcolor = (carent)=>{
           if(location.pathname === carent){
               return '#133451'
           }
       }
    
      /*{navB ? "nav-bar home-li":"nav-bar"}*/
      const location = useLocation()
    return (
        <nav className={location.pathname == '/'?'nav-bar home-li':'nav-bar'}>
            <header className='navbar-logo'>
                <h1>beast show</h1>
            </header>
            <section className="nav-li">
                <ul>
                    <li>
                        <Link className='link' style={{backgroundColor:getcolor('/')}} to='/' >home</Link>
                    </li>
                    <li>
                        <Link className='link'  style={{backgroundColor:getcolor('/movies')}} to='/movies' >movies</Link>
                    </li>
                    <li> 
                        <Link className='link'  style={{backgroundColor:getcolor('/tv show')}} to='/tv show' >tv show</Link>
                    </li>
                </ul>
            </section>
            
        </nav>
    )
}

export default Nav
