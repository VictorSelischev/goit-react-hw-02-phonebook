import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number, onDeleteBtn }) => {
  // console.log(id);
  return (
    <li className={css.contact__item}>
      <span className={css.contact__name}>
        {name}: {number}
      </span>
      <button type="button" onClick={() => onDeleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};
