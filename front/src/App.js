import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useNavigate, Route, Routes, useLocation } from "react-router";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  const location = useLocation();
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  const [access, setAccess] = useState(false);

  const username = "enzo@gmail.com";
  const password = "123asd";
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("usuario invalido");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    // const URL_BASE = "http://localhost:3001/rickandmorty";
    // const KEY = "6f3489c04ad1.f60738f91dc6380712fb";
    //   fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("No se encontró el personaje.");
        }
      })
      .catch((error) => alert("Hubo un error en la búsqueda."));
  };

  const [characters, setCharacters] = useState([]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      <h5 className="texto">Created by Enzo Acosta</h5>
      <div>
        {location.pathname === "/" ? (
          <Form login={login} />
        ) : (
          <Nav onSearch={onSearch} />
        )}
      </div>
      <hr />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <div></div>
      <hr />
      <h1 className="titulo">Rick and morty App</h1>
    </div>
  );
}

export default App;
