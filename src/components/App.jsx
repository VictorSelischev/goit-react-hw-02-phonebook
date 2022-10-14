import { Component } from 'react';
import FormPhonbook from './FormPhonbook/FormPhonbook';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    this.setState(prevState =>  ({
      contacts: [data, ...prevState.contacts] }
    ));
  }

  handleChangeFilter = evt => {
    console.log(this.state.filter);
    this.setState({filter: evt.target.value});
  }

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: '#c0ddff',
        }}
      >
        <Section title={'Phonebook'}>
          <FormPhonbook onSubmitProp={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter filter={this.state.filter} changeFilter={ this.handleChangeFilter } />
          <ContactsList contacts={contacts} />
        </Section>
      </div>
    );
  }
}

export { App };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
