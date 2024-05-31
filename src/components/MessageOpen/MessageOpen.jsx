import style from "./style.module.css";
import avatar from "../../assets/avatar.jpg";
import Message from "../Message/Message";

function MessageOpen(props) {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <Message />
      </div>
      <p className={style.text}>
        Dear Moshe,
        <br />
        <br />
        Thank you for reaching out to inquire about the availability of our
        products. We are pleased to inform you that the item you are interested
        in is currently in stock and ready for purchase. You can place your
        order directly through our website{" "}
        <a>https://practicum.workin.co.il </a>to make a purchase in person.
        <br />
        <br />
        Thank you for considering our products.
        <br />
        <br />
        Best regards,
        <br />
        Aviad Derli
        <br />
        Customer Service Team
      </p>
    </div>
  );
}

export default MessageOpen;
