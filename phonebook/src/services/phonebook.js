import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getPersons =  async() => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
};

const setPerson =  async (person) => {
  const request = axios.post(baseUrl,person)
  return request.then(res => res.data);
};

const deletePerson =  async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(res => res.data);
};

export default { getPersons,setPerson,deletePerson };
