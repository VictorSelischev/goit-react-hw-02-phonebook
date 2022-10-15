// import css from './ContactsList.module.css';
import {ContactElement} from './ContactElement/ContactElement';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactElement key={id} name={ name } number={ number } />
        );
      })}
    </ul>
  );
};
