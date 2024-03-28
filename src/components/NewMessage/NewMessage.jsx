import style from "./style.module.css";
import mail from "../../assets/ci_mail.svg";

function NewMessages() {
  return (
    <div className={style.container}>
      <img className={style.img} src={mail} alt="mail Logo" />
      <p className={style.text}>New message</p>
    </div>
  );
}

export default NewMessages;
