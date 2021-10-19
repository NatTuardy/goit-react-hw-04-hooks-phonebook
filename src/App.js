import { useState, useEffect, useRef } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: "",
})

useEffect(() => {
  const contactsString = window.localStorage.getItem("contacts");
  const contactsParse = JSON.parse(contactsString);
  if (contactsParse) {
    setState(prevState=>({ ...prevState, contacts: contactsParse }));
  }
}, [])

useEffect(() => {
  window.localStorage.setItem("contacts", JSON.stringify(state.contacts));
}, [state.contacts])

const handleFilter = () => {
  const { filter, contacts } = state;
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return filteredContacts;
};

const handleChange = ({ target }) => {
  const { value, name } = target;
  setState(prevState=> ({ ...prevState, [name]: value }));
};

const   handleSubmit = (newContact) => {
  setState((prevState) => {
    const findDoubleContact = state.contacts.find(
      (contact) => contact.name === newContact.name
    );
    if (findDoubleContact) {
      alert(`${findDoubleContact.name} is already in contacts`);
      return;
    }
    const newContactsList = [...prevState.contacts, newContact];
    return {
      ...prevState,
      contacts: newContactsList,
    };
  });
};

const handleDelete = (id) => {
  setState((prevState) => {
    const copyContactsList = [...state.contacts];
    const newContactsList = copyContactsList.filter(
      (contact) => contact.id !== id
    );
    return {
      ...prevState,
      contacts: newContactsList,
    };
  });
};

const { contacts, filter } = state;

  return (
    <div className="App">
      <h1 className="App-header">Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <Filter onChange={handleChange} data={contacts} filter={filter} />
      <ContactList data={handleFilter()} onDelete={handleDelete} />
    </div>
  );
};

export default App;
