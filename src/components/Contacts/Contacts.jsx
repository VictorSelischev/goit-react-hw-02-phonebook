import css from './Contacts.module.css';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contact__item}>
            <p>{name}: { number }</p>
          </li>
        );
      })}
    </ul>
  );
};
