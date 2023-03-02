
export const selectAllContacts = state => state.contacts?.items;

export const selectIsLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = (state) => {
  const contacts = selectAllContacts(state);
  console.log(contacts)
  const normalizedFilter = state.filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase() !== normalizedFilter
      ? contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(normalizedFilter)
      : console.log('NO')
  );
}