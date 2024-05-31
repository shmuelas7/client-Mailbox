import style from "./style.module.css";
function Label({ text, icon, color }) {
  return (
    <div className={style.container}>
      <div className={style.img}>{icon}</div>
      <h6 className={style.text}>{text}</h6>
    </div>
  );
}
export default Label;
