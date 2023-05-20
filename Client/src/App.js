import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import image from "../src/images/Rick_and_Morty.svg.png";
import { Nav } from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";

const URL_BASE = "http://localhost:3001/rickandmorty/character";

const email = "alumnos@soyhenry.com";
const password = "Alumnos123";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access, navigate]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <img src={image} className="img-rick" alt="Rick and Morty"></img>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
