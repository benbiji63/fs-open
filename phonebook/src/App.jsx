import { useState, useEffect } from 'react';
import Form from './components/form';
import List from './components/list';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', id: 1 }]);
  const [newName, setNewName] = useState('');

  // useEffect(() => {
  //   setNewName();
  // }, []);
  const checkIfAlreadyExist =  (nameAdded) => {
    if (persons.some(({name})=>name===nameAdded)) {
      alert(`${nameAdded} already added to phonebook`);
      return true;
    } else {
      return false;
    }
  };
  const addPerson =(event, name) => {
    event.preventDefault();
    console.log(p);
    if(checkIfAlreadyExist(name)){
      return null;
    }
    setNewName(name);
    // console.log(newName);
    // console.log(name);

    const newPerson = {
      name: newName,
      id: persons.length + 1,
    };
    // console.log(newPerson);
    setPersons(persons.concat(newPerson));
    // console.log(persons);
  };
  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Form handleClick={addPerson} handleChange={handleNameChange} />
      <h2>Numbers</h2>
      <List items={persons} />
    </div>
  );
};

export default App;
