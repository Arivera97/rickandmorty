import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/card.module.css";

const URL_BASE = "http://localhost:3001/rickandmorty/character";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`${URL_BASE}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.card}>
      {character && (
        <div>
          <h2>{character?.name}</h2>
          <h2>{character?.status}</h2>
          <h2>{character?.species}</h2>
          <h2>{character?.gender}</h2>
          <img src={character?.image} alt={character} />
        </div>
      )}
    </div>
  );
};

export default Detail;
