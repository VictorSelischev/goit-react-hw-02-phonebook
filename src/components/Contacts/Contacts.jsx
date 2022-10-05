

export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => {
        return (
          <li key={id}>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
