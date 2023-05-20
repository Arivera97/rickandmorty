import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../styles/nav.module.css";
import { Link } from "react-router-dom";

export const Nav = ({ onSearch, logout }) => {
  return (
    <nav className={styles.navContainer}>
      <button>
        <Link to="/home">Inicio</Link>
      </button>
      <button>
        <Link to="/about">Acerca de</Link>
      </button>
      <div>
        <SearchBar onSearch={onSearch} />
        <button onClick={logout} className={styles.logoutButton}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
