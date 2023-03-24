import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
  }, [detailId]);

  console.log(character);

  return (
    <div className={styles.contenedor}>
      <div className={styles.texto}>
        <h1> Detail:</h1>
        <h2>
          <b>Name:</b> {character.name}
        </h2>
        <h2>
          <b>Status: </b>
          {character.status}
        </h2>
        <h2>
          <b>Specie: </b>
          {character.species}
        </h2>
        <h2>
          <b>Gender: </b>
          {character.gender}
        </h2>
        <h2>
          <b>Origin: </b>
          {character.origin && character.origin.name}
        </h2>
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
      <div className={styles.imagen}>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}
