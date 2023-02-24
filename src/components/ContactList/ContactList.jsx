import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAllContacts, getFilteredContacts } from 'redux/tasks/cont-selectors';
import ContactItem from './ContactItem';
import { ContactUlCss, ContactItemCss } from './ContactList.styled';

const ContactList = ({ onDelete }) => {
    const contacts = useSelector(getFilteredContacts);
    
    return <ContactUlCss>
    {contacts.map(({ id, name, number }) => <ContactItemCss key={id}>
        <ContactItem id={id} name={name} number={number} onDelete={onDelete} />
    </ContactItemCss>)}
</ContactUlCss>
}



ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired
}
export default ContactList;