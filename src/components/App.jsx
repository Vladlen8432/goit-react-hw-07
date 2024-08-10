import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import { fetchContacts } from "../redux/contactsOps";
import SearchInput from "./SearchInput/SearchInput";
import ContactList from "./ContactList/ContactList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="phonebookHeader">Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <SearchInput />
      <ContactList />
    </div>
  );
};

export default App;
