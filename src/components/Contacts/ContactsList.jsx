import css from './ContactsList.module.css';
import { ContactElement } from './ContactElement/ContactElement';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => {
        // console.log(id);
        return (
          <ContactElement
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteBtn={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
