import { useDispatch, useSelector } from "react-redux";
import { selectFilterName } from "../../redux/filters/selectors";
import { setFilterValue } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filterValue = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <p className={css.label}>Find contacts by number or name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={(e) => dispatch(setFilterValue(e.target.value))}
        name="name"
      />
    </div>
  );
};

export default SearchBox;
