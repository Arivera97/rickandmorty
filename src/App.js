import "./App.css";
import Cards from "./components/Cards.jsx";
import image from "../src/images/Rick_and_Morty.svg.png";
import { Nav } from "./components/Nav";
import { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";

const URL_BASE='https://be-a-rym.up.railway.app/api/character'
const API_KEY='4156247ebc87.52f7f1ffd6a1d80bcd25'

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      });
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <img src={image} className="img-rick"></img>
      <div className="order">
        <Nav onSearch={onSearch} />
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
