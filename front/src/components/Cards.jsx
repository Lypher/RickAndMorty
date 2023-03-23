import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.cardsDiv}>
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
