import css from './FormPhonbook.module.css';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class FormPhonbook extends Component {

  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const contact = {};
    contact.id = nanoid();
    contact.name = this.state.name;
    this.props.onSubmitProp(contact);

    this.reset();
};

  reset = () => {
    this.setState({ name: '', });
  }

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
