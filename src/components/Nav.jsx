import SearchBar from "./SearchBar";
import styles from '../styles/nav.module.css';
import { Link } from "react-router-dom";


export const Nav = ({onSearch}) => {
  return (
      <nav className={styles['navContainer']}>
        <button>
        <Link to="/home"> Inicio </Link>
        </button>
        <button>
        <Link to="/about"> Acerca de</Link>
        </button>
        <SearchBar onSearch={onSearch} />
      </nav>
  );
};
