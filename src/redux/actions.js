export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const DELETE_FROM_FAVORITES = "DELETE_FROM_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addToFavorites = (character) => {
  return { type: ADD_TO_FAVORITES, payload: character };
};
export const removeFromFavorites = (id) => {
  return { type: DELETE_FROM_FAVORITES, payload: id };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
export const SHOW_ALL_CARDS = "SHOW_ALL_CARDS";

export const showAllCards = () => {
  return {
    type: SHOW_ALL_CARDS,
  };
};
