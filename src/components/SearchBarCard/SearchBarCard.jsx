import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

const SearchBarCard = ({ onSubmit }) => {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }
  return (
    <div className={s.boxSearch}>
      <SearchIcon size={25} className={s.icon} />
      <input
        onKeyUp={submit}
        className={s.input}
        type="text"
        placeholder="Search any card game from YU-GI-OH!"
      />
    </div>
  );
};

export default SearchBarCard;
