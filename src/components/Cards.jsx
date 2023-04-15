import Card from "./Card";
import styles from '../styles/cards.module.css';

export default function Cards({characters, onClose}) {
  return (
    <div className={styles['card-gallery']}>
      {characters.map(({ id, name,  image, species, gender }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
