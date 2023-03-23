import {
  ADD_TO_FAVORITES,
  DELETE_FROM_FAVORITES,
  FILTER,
  ORDER,
  SHOW_ALL_CARDS,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case DELETE_FROM_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };
    case ORDER:
      let sortedChars = state.allCharacters.slice().sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
      if (action.payload === "Descendente") {
        sortedChars.reverse();
      }
      return {
        ...state,
        myFavorites: sortedChars,
      };
    case SHOW_ALL_CARDS:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    default:
      return state;
  }
};
export default rootReducer;
