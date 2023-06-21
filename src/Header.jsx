import React from "react";
import Root from './Root'

const Header = ({ title }) => {
    return (
      <header className="Header">  
        <h1>{title}</h1>
      </header>  
    )
};

export default Header;