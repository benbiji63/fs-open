import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getPersons = async () => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
};

const setPerson = async person => {
  const request = axios.post(baseUrl, person);
  return request.then(res => res.data);
};

const deletePerson = async id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(res => res.data);
};

const changeNumber = async (person, number) => {
  const request = await axios.put(`${baseUrl}/${person.id}`, {
    ...person,
    number: number,
  });
  return request;
};

export default { getPersons, setPerson, deletePerson, changeNumber };
