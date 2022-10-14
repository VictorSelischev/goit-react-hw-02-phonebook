

export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, id }) => {
        console.log(id);
        console.log(name);
        return (
          <li key={id}>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
