import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Menu = (props) => {
  const activeColor = {color: "#212121"}
  return (
    <nav className="menu">
      <ul>
          <li><NavLink exact activeStyle={activeColor} to="/">Home</NavLink></li>
          <li><NavLink exact activeStyle={activeColor} to="/cadastrar">Cadastrar</NavLink></li>
          <li><NavLink exact activeStyle={activeColor} to="/livros">Livros</NavLink></li>
      </ul>
    </nav>
  );
}

export default Menu;