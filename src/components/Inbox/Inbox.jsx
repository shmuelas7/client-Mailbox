import style from "./style.module.css";

function Inbox({ icon, text, number = 0 }) {
  return (
    <div className={style.container}>
      <div className={style.img}>{icon}</div>
      <div className={style.box} style={number ? null : { color: "#00A389" }}>
        <p className={style.text}>{text}</p>

        {number > 0 && <p className={style.number}>{number}</p>}
      </div>
    </div>
  );
}

export default Inbox;
