import css from './ContactElement.module.css';

export const ContactElement = ({id, name, number}) => {
    return (
          <li key={id} className={css.contact__item}>
            <p>{name}: { number }</p>
          </li>
        );
}