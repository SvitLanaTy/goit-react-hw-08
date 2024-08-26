import { useSelector } from "react-redux";

import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";

import "./App.css";
import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./components/Section/Section.module.css";

function App() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  console.log(contacts);  

  const showContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <Section>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={showContacts} />
      </Section>
    </div>
  );
}

export default App;
