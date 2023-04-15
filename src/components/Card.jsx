import styles from "../styles/card.module.css";
import { Link } from "react-router-dom";
export default function Card({ id, name, onClose, image, species, gender }) {
  return (
    <div className={styles.card}>
      <button onClick={() => onClose(id)}>X</button>
   <Link to={`/detail/${id}`}>
      <h2>Nombre: {name}</h2>
      </Link>
      <h2>Especie: {species}</h2>
      <h2>Género: {gender}</h2>
      <img src={image} alt="" />
    </div>
  );
}
