import style from "./style.module.css";

function TitleMail() {
  return (
    <div className={style.container}>
      <div className={style.line}></div>
      <p className={style.date}>Today, 28th March 2024, 09:25</p>
      <p className={style.text}>Meeting with new investors</p>
    </div>
  );
}

export default TitleMail;
