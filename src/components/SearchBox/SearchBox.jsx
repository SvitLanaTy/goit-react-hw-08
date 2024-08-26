import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, setNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    console.log(event);

    const action = setNameFilter(event.target.value);
    dispatch(action);
  };

  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={(e) => handleFilterChange(e)}
        name="name"
      />
    </div>
  );
};

export default SearchBox;
