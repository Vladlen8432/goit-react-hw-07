import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/contactSlice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <input type="text" name="filter" value={filter} onChange={handleChange} />
  );
};

export default SearchInput;
