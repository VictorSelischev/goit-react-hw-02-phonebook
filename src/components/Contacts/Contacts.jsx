import css from './Contacts.module.css';

export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        // console.log(id);
        // console.log(name);
        return (
          <li key={id} className={css.contact__item}>
            <p>{name}: { number }</p>
          </li>
        );
      })}
    </ul>
  );
};
