import { ButtonCss } from 'components/App/App.styled';
import Spinner from 'components/Spinner';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rootSlice } from 'redux/tasks/cont-slice';
import { fetchdDeleteContact } from 'redux/tasks/taskoperations';
import { ContactTextCss } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  

    return <>
    <ContactTextCss>{name}: {number}</ContactTextCss>
    <ButtonCss type='button' onClick={() => dispatch(fetchdDeleteContact(id))}>Delete</ButtonCss>
</>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,

}

export default ContactItem;