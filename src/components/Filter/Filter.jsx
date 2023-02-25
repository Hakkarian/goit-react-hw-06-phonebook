import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filters/filter-selectors';
import { rootSlice } from 'redux/tasks/cont-slice';

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleFilterChange = e =>
        dispatch(rootSlice.actions.settedFilter(e.target.value));
    
    return <label>Filter:
        <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
}


export default Filter;