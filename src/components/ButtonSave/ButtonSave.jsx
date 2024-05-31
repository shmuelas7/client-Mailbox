import style from "./style.module.css";
import send from "../../assets/send.svg";

function ButtonSave() {
  return (
    <div className={style.container}>
      <p className={style.text}>Send</p>
      <img className={style.img} src={send} />
    </div>
  );
}

export default ButtonSave;
