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

  addContact = data => {
    console.log(data);
    this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => )
  }

  handleChangeFilter = evt => {
    console.log(this.state.filter);
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    // const normalizedFilter = filter.toLowerCase();
    // const visibleContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );

    const visibleContacts = this.getVisibleContacts();

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
          <FormPhonbook onSubmitProp={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter filter={filter} changeFilter={this.handleChangeFilter} />
          <ContactsList contacts={visibleContacts} />
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
