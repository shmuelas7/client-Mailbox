import style from "./style.module.css";
import { FaStar } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

function Offers() {
  return (
    <div className={style.container}>
      <p className={style.text}>permission offers</p>
      <div className={style.box}>
        <FaStar className={style.icon} />
        <FaPrint className={style.icon} />
        <FaTrash className={style.icon} />
        <HiDotsVertical className={style.icon} />
      </div>
    </div>
  );
}
export default Offers;
