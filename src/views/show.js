import React from 'react';
import CaptainMarvel from '../assets/img/CaptainMarvel.png'
import css from '../App.css'
import { Link, HashRouter as Router, Route, Switch } from "react-router-dom";


function PaginaInicial() {
  return (
    <div class="Conteiner">
      <Link class="App-link" to="/CapitaMarvel">
        <img class="Img-logo-cap-princp" alt="Captain Marvel" src={CaptainMarvel} />
      </Link>
    </div>
  );
}

export default PaginaInicial;



