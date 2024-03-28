import style from "./style.module.css";
import trash from "../../assets/trash.svg";
import menu from "../../assets/menu.svg";

function MenuOptions() {
  return (
    <div className={style.container}>
      <img className={style.trash} src={trash} />
      <img className={style.menu} src={menu} />
    </div>
  );
}

export default MenuOptions;
