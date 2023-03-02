import axios from "axios"

const cardsInstance = axios.create({
  baseURL: 'https://63d0f841d5f0fa7fbdc0f047.mockapi.io',
});

export const getAllContacts = async () => {
  const { data } = await cardsInstance.get("/contacts")
  console.log(data);
  return data;
}

export const addContact = async (info) => {
  const { data } = await cardsInstance.post("/contacts/", info);
  console.log(data)
  return data;
}

export const deleteContact = async id => {
  const { data: result } = await cardsInstance.delete(`/contacts/${id}`);
  return result;
};