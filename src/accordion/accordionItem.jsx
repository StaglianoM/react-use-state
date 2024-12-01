import PropTypes from 'prop-types';
import style from './accordion.module.css';

export default function AccordionItem({ item, isOpen }) {
    const { description } = item; //estraggo solo description (invece di anche title)

    return ( //se è true(isOpen) mostro la descrizione, se false il testo è nascosto tramite CSS
        <div>
            <div className={`${style.description} ${isOpen ? style.open : ''}`}>
                {description}
            </div>
        </div>
    );
}


AccordionItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
};
