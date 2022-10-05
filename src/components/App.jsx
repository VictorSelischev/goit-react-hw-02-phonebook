import { Component } from 'react';
import { nanoid } from 'nanoid';

import { FormPhonbook } from './FormPhonbook/FormPhonbook';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const contact = {};
    contact.id = nanoid();
    contact.name = this.state.name;
    console.log(contact);

    // this.setState(prevState => {
    //   return { contacts: prevState.contacts.push(contact) };
    // })
    
  };

  render() {
    const { contacts, name } = this.state;
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;
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
        <Section title={'Phonbook'}>
          <FormPhonbook handleSubmit={handleSubmit} handleChange={handleChange} name={name} />
        </Section>
        {/* <Section title={'Contacts'}>
          <Contacts contacts={contacts} />
        </Section> */}
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
