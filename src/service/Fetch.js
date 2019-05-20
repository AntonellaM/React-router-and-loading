
const ENDPOINT = 'https://randomuser.me/api/?results=10';

const fetchPeople = () => fetch(ENDPOINT).then(response => response.json());

export { fetchPeople };