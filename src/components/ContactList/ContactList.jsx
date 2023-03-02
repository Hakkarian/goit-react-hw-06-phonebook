import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/tasks/cont-selectors';
import ContactItem from './ContactItem';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/tasks/taskoperations';
import Spinner from 'components/Spinner';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();
    console.log(contacts)

    useEffect(() => {
        dispatch(fetchAllContacts())
    }, [dispatch])
    //dispatch(fetchAddContact)
    //dispatch(fetchDeleteContact(id))

    return (
      <>
        <Spinner />
        <ContactUlCss>
          {contacts.map(({ id, name, phone }) => (
            <ContactItemCss key={console.log(id)}>
              <ContactItem id={id} name={name} number={phone} />
            </ContactItemCss>
          ))}
        </ContactUlCss>
        <Spinner />
      </>
    );
}


export default ContactList;