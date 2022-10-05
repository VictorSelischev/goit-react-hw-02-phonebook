import css from './FormPhonbook.module.css';

export const FormPhonbook = ({handleSubmit, handleChange, name}) => {
  return (
    <form className={css.formAddBook}>
      <label className={css.formAddBook__label}>
        Name
        <input
          className={css.formAddBook__input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>Add contact</button>
    </form>
  );
};
