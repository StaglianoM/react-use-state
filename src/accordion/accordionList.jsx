import PropTypes from 'prop-types';
import AccordionItem from './accordionItem';
import style from './accordion.module.css';
import { useState } from 'react';



export default function AccordionList({ items }) {
  const [currentId, setCurrentId] = useState(null); // ID del bottone attivo

  function toggle(id) {
    setCurrentId(currentId === id ? null : id); // Se clicco lo stesso ID, lo chiude (null), altrimenti apre l'ID clickato
  }

  return (
    <div>
      {/* Sezione Bottoni */}
      <div className={style.buttons}>
        {items.map((item) => (  // Genera un bottone per ogni elemento della lista
          <button
            key={item.id}
            onClick={() => toggle(item.id)}  // Al click, aggiorna l'ID corrente
            className={`${style.button} ${currentId === item.id ? style.active : ''}`} // Attiva la classe 'active' per il bottone cliccato
          >
            {item.title} {/* Mostra il titolo nel bottone */}
          </button>
        ))}
      </div>

      {/* Sezione Descrizioni */}
      <div className={style.descriptions}>
        {items.map((item) => (  // Controlla se l'ID corrente corrisponde al bottone cliccato
          currentId === item.id && (
            <AccordionItem
              key={item.id}
              item={item} // Passa i dati dell'elemento
              isOpen={currentId === item.id} // Specifica se l'accordion è aperto
              onToggle={() => toggle(item.id)} //aggiorno l'id per aprire  o chiudere l'accordion
            />
          )
        ))}
      </div>
    </div>
  );
}


AccordionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
