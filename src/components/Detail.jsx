import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/card.module.css";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "4156247ebc87.52f7f1ffd6a1d80bcd25";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      });
    return setCharacter({});
  }, [id]);

  return <div className={styles.card}>
    {character && <div>
        <h2>{character?.name}</h2>
        <h2>{character?.status}</h2>
        <h2>{character?.species}</h2>
        <h2>{character?.gender}</h2>
        <img src={character?.image} alt={character}/>
        </div>}
  </div>;
};

export default Detail;
