import { useState, useEffect } from 'react';
import Form from './components/form';
import List from './components/list';
import Search from './components/search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchedContact, setSearchedContact] = useState(persons);
  console.log(searchedContact);

  // useEffect(() => {
  //   setNewName();
  // }, []);
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
    const filteredContacts = persons.filter(person => person.name.toLowerCase().includes(contact));
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
