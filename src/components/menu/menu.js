import React from 'react';
import { Link } from "react-router-dom";
import getSidebarNavItems from "../../data/sidebar-nav-items";
import css from '../../App.css'
import logo from '../../assets/img/marvel.png'
import captainMarvel from '../../assets/img/captainMarvel.jpg'

function Menu() {
  return (
        <>

        <div class="App-header"> 
             <Link class="App-link" to="/Show"> <img class="Img-logo" alt="Home" src={logo} />  </Link> 
             <Link class="App-link" to="/CapitaMarvel"> 
                <img class="Img-logo-cap" alt="Captain Marvel" src={captainMarvel} /> 
                <label class="Desc-logo-cap"> Captain Marvel </label>
             </Link>                
        </div>

      </>  
    );
}

export default Menu;