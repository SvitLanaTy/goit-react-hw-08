import "./App.css";
import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./components/Section/Section.module.css";

function App() {
  return (
    <div>
      <Section>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Section>
    </div>
  );
}

export default App;
