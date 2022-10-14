import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, changeFilter } = this.props;
    return (
      <label className={css.formAddBook__label}>
        Find contacts by name
        <input
          className={css.formAddBook__input}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    );
  }
}

export { Filter };
