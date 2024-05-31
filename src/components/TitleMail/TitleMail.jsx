import style from "./style.module.css";

function TitleMail({ header, time }) {
 
  return (
    <div className={style.container}>
      <p className={style.date}>{time}</p>
      <p className={style.text}>{header}</p>
    </div>
  );
}

export default TitleMail;
