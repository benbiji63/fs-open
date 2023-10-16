import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/form';
import List from './components/list';
import Search from './components/search';
import phonBookServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  let allContacts = [];
  const setContacts = () => {
    phonBookServices.getPersons().then(contacts => {
      allContacts = contacts;
      setPersons(contacts);
    });
  };
  useEffect(setContacts, []);

  const checkIfAlreadyExist = nameAdded => {
    if (persons.some(({ name }) => name === nameAdded)) {
      alert(`${nameAdded} already added to phonebook`);
      return true;
    } else {
      return false;
    }
  };

  const addPerson = (event, name, number) => {
    event.preventDefault();
    if (checkIfAlreadyExist(name)) {
      return null;
    }
    setNewName(name);
    setNewNumber(number);
    // console.log(newName);
    // console.log(name);

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    phonBookServices.setPerson(newPerson);
    setContacts();
  };
  const handleFilter = e => {
    console.log(allContacts);
    setPersons(allContacts);
    if (e.key !== 'Enter') {
      return null;
    }
    const contact = e.target.value.toLowerCase();
    const filteredContacts = persons.filter(person =>
      person.name.toLowerCase().includes(contact)
    );
    console.log(filteredContacts);
    setPersons(filteredContacts);
    console.log(persons);
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search handleEnter={handleFilter} />
      <h2>Add a new contact</h2>
      <Form
        handleClick={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <List items={persons} />
    </div>
  );
};

export default App;
