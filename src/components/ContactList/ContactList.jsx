import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/tasks/cont-selectors';
import ContactItem from './ContactItem';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';

const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);

    return <ContactUlCss>
    {contacts.map(({ id, name, number }) => <ContactItemCss key={id}>
        <ContactItem id={id} name={name} number={number} />
    </ContactItemCss>)}
</ContactUlCss>
}


export default ContactList;