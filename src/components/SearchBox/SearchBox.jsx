import { useDispatch, useSelector } from "react-redux";
import { selectFilterName } from "../../redux/selectors";
import { setNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filterName = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={(e) => dispatch(setNameFilter(e.target.value))}
        name="name"
      />
    </div>
  );
};

export default SearchBox;
