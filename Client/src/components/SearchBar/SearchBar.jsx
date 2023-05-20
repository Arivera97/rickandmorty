import { useState } from "react";
import styles from "../styles/searchbar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value)
  };

  return (
    <div className={styles["inputAdd"]}>
      <input type="search" onChange={handleChange} value={id}/>
      <button onClick={()=> {onSearch(id); setId('')}}>Agregar</button>
    </div>
  );
}
