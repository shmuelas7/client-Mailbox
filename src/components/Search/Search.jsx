import style from "./style.module.css";
import searchImg from "../../assets/search.svg";

function Search({ search, setSearch, func }) {
  return (
    <div className={style.container}>
      <input
        type="text"
        className={style.text}
        placeholder="Search"
        onInput={(e) => setSearch(e.target.value)}
      />
      <img
        src={searchImg}
        className={style.img}
        onClick={() => {
          func();
        }}
      />
    </div>
  );
}

export default Search;
