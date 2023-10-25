import { useState, useEffect } from 'react';
import Form from './components/form';
import List from './components/list';
import Search from './components/search';
import Notification from './components/notification';
import phonBookServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [notification, setNotification] = useState('Hai');

  let allContacts = [];

  // ----------
  // Helper function
  // ----------
  const checkIfAlreadyExist = nameAdded => {
    if (persons.some(({ name }) => name === nameAdded)) {
      return true;
    } else {
      return false;
    }
  };

  const handleFilter = e => {
    setPersons(allContacts);
    if (e.key !== 'Enter') {
      return null;
    }
    const contact = e.target.value.toLowerCase();
    const filteredContacts = persons.filter(person =>
      person.name.toLowerCase().includes(contact)
    );
    setPersons(filteredContacts);
  };
  const changeContactNumber = (name, number) => {
    const changeContact = window.confirm(
      `${name} already added to phonebook, would you like to change the contact`
    );

    if (changeContact === true) {
      const changePerson = persons.find(person => person.name === name);
      phonBookServices.changeNumber(changePerson, number);
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const displayNotification = () => {
    document.querySelector('#notification').classList.remove('hide');

    toggleHide();
    document.querySelector('#notification').classList.add('hide');
    setTimeout(() => {
      document.querySelector('#notification').classList.add('hide');
    }, 2000);
  };

  // ----------
  //  Functions dealing with db
  // ----------

  const setContacts = () => {
    phonBookServices.getPersons().then(contacts => {
      setPersons(contacts);
    });
  };
  useEffect(() => setContacts, []);
  useEffect(() => setContacts, [persons]);
  allContacts = persons;

  const addPerson = (event, name, number) => {
    event.preventDefault();
    if (checkIfAlreadyExist(name)) {
      changeContactNumber(name, number);
      return true;
    }
    setNewName(name);
    setNewNumber(number);

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    phonBookServices.setPerson(newPerson);
    setContacts();
    displayNotification();
  };

  const deleteContact = (event, id, name) => {
    event.preventDefault();
    if (!window.confirm(`Delete ${name} `)) {
      return null;
    }
    phonBookServices.deletePerson(id);
    setContacts();
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Search handleEnter={handleFilter} />
      <h2>Add a new contact</h2>
      <Form
        handleClick={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <List items={persons} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
