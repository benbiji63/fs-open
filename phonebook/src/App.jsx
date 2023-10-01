import { useState, useEffect } from 'react';
import Form from './components/form';
import List from './components/list';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, number: '123-456-7890' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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
  const handleNameChange = event => {
        setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
};


  return (
    <div>
      <h2>Phonebook</h2>
      <Form handleClick={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <List items={persons} />
    </div>
  );
};

export default App;
