import "./App.css";
import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./components/Section/Section.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "./redux/contacts/selectors";

function App() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {items.length > 0 && <ContactList />}
      </Section>
    </div>
  );
}

export default App;
