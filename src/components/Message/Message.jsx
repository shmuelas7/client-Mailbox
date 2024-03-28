import style from "./style.module.css";
import avatar from "../../assets/avatar.jpg";
import backArrow from "../../assets/backArrow.svg";

function Message(props) {
  let x = false;
  return (
    <div className={style.container}>
      {x ? (
        <img className={style.img} src={avatar} alt="mail Logo" />
      ) : (
        <img className={style.arrow} src={backArrow} alt="mail Logo" />
      )}
      <p className={style.name}>{x ? "Jessica Koel" : "You"}</p>
      <p className={style.text}>- Hi, I have a new meeting opportunity...</p>
      <p className={style.date}>28.03.2024 &nbsp; &nbsp; 09:25</p>
    </div>
  );
}

export default Message;
