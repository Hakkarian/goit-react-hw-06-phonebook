import { ButtonCss } from 'components/App/App.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rootSlice } from 'redux/tasks/cont-slice';
import { ContactTextCss } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
  const handleDeleteContact = itemId => {
    dispatch(rootSlice.actions.deleteContact(itemId));
  };
    return <>
    <ContactTextCss>{name}: {number}</ContactTextCss>
    <ButtonCss type='button' onClick={() => handleDeleteContact(id)}>Delete</ButtonCss>
</>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

}

export default ContactItem;