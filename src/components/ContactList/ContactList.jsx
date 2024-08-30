import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const showContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {showContacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
