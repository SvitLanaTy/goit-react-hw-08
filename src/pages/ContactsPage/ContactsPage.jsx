import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import { ErrorMessage } from "formik";
import Section from "../../components/Section/Section";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Phonebook</DocumentTitle>
      <Section>
        <h2 className={css.title}>Phonebook</h2>
        {isLoading && !error && (
          <b style={{ color: "blue" }}>Request in progress...</b>
        )}
        {error && <ErrorMessage title={error} />}
        <ContactForm />
        <SearchBox />
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {items.length > 0 && <ContactList />}
        {isLoading && <Loader />}
      </Section>
    </div>
  );
};
export default ContactsPage;
