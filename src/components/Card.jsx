import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../redux/actions";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card({
  id,
  name,
  species,
  image,
  gender,
  isFav,
  onClose,
  agregar,
  remover,
  myFavorites,
}) {
  const handleFavorite = () => {
    if (Fav) {
      remover(id);
      setFav(false);
    } else {
      agregar({ id, name, species, image, gender });
      setFav(true);
    }
  };

  const [Fav, setFav] = useState(isFav);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites, id]);
  return (
    <div className={styles.divCard}>
      <button onClick={() => onClose(id)} className={styles.button}>
        X
      </button>
      <h2>{name}</h2>

      <img src={image} alt="" className={styles.img} />

      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
      <Link to={`/detail/${id}`}>
        <h3>More info</h3>
      </Link>
      <button onClick={handleFavorite}>
        {Fav ? <span>❤️</span> : <span>🤍</span>}
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    agregar: (character) => {
      dispatch(addToFavorites(character));
    },
    remover: (id) => {
      dispatch(removeFromFavorites(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
