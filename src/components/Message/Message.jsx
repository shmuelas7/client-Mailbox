import style from "./style.module.css";
import backArrow from "../../assets/backArrow.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

function Message({ me = true, message, date, name, img, from }) {
  const { user, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className={style.container}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={style.boxImg}>
          {user?._id == from ? (
            <img className={style.arrow} src={backArrow} alt="mail Logo" />
          ) : (
            <img className={style.img} src={img} alt="mail Logo" />
          )}
        </div>
        <p className={style.name}>{user?._id == from ? "You" : name}</p>
        <p
          className={style.text}
          style={open ? { visibility: "hidden" } : null}
        >
          {message}
        </p>
        <p className={style.date}>{date}</p>
      </div>
      <div style={!open ? { display: "none" } : null}>
        <p className={style.textOpen}>{message}</p>
      </div>
    </div>
  );
}

export default Message;
