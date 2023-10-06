import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/form';
import List from './components/list';
import Search from './components/search';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchedContact, setSearchedContact] = useState(persons);

  useEffect(() => {
    console.log('Effect');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log(response);
      setPersons(response.data);
      setSearchedContact(persons)
    });
  }, []);


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
      id: persons.length + 1,
    };
    // console.log(newPerson);
    setPersons(persons.concat(newPerson));
    console.log(persons);
  };
  const handleFilter = e => {
    console.log(e.key);
    if (e.key !== 'Enter') {
      return null;
    }
    const contact = e.target.value.toLowerCase();
    const filteredContacts = persons.filter(person =>
      person.name.toLowerCase().includes(contact)
    );
    setSearchedContact(filteredContacts);
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
      <List items={searchedContact} />
    </div>
  );
};

export default App;
