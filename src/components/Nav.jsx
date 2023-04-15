import SearchBar from "./SearchBar";
import styles from '../styles/nav.module.css';
import { Link } from "react-router-dom";


export const Nav = ({onSearch}) => {
  return (
      <nav className={styles['navContainer']}>
        <button>
            <Link to="/about"> ABOUT</Link>
        </button>
        <button>
        <Link to="/home"> HOME </Link>
        </button>
        <SearchBar onSearch={onSearch} />
      </nav>
  );
};
