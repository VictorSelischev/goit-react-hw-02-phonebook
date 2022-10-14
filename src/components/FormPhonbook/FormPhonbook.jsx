import css from './FormPhonbook.module.css';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class FormPhonbook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    // const contact = {};
    // contact.id = nanoid();
    // contact.name = this.state.name;
    // contact.number = this.state.number;
    this.props.onSubmitProp({id: nanoid(), ...this.state});

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.formAddBook} onSubmit={this.handleSubmit}>
        <label className={css.formAddBook__label}>
          Name
          <input
            className={css.formAddBook__input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={css.formAddBook__label}>
          Phone Number
          <input
            className={css.formAddBook__input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormPhonbook;

// export const FormPhonbook = ({ handleSubmit, handleChange, name }) => {
//   return (
//     <form className={css.formAddBook} onSubmit={handleSubmit}>
//       <label className={css.formAddBook__label}>
//         Name
//         <input
//           className={css.formAddBook__input}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };
