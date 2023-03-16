import React from "react";
import { connect, useDispatch } from "react-redux";
import styles from "../components/Favorites.module.css";
import { orderCards, filterCards, showAllCards } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

function Favorites(props) {
  const { myFavorites } = props;
  const dispatch = useDispatch();

  const handleOrderChange = (event) => {
    const { value } = event.target;
    dispatch(orderCards(value));
  };

  const handleFilterCards = (event) => {
    const { value } = event.target;
    dispatch(filterCards(value));
  };

  const handleShowAllCards = () => {
    dispatch(showAllCards());
  };

  const favoriteCharacters = myFavorites.map((character) => (
    <div className={styles.cardsDiv}>
      <div className={styles.divCard}>
        <h2>{character.name}</h2>

        <img src={character.image} alt="" className={styles.img} />

        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
        <select name="" id="" onChange={handleOrderChange}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="" id="" onChange={handleFilterCards}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button onClick={handleShowAllCards}>Show All</button>
      </div>
      <div className={styles.container}>{favoriteCharacters}</div>
    </div>
  );
}

export default connect(mapStateToProps)(Favorites);
