import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filters/filter-selectors';

const Filter = ({ onChange }) => {
    const filter = useSelector(getFilter);
    return <label>Filter:
        <input type="text" value={filter} onChange={onChange} />
    </label>
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;