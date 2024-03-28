import style from "./style.module.css";
import avatar from "../../assets/avatar.jpg";
import emptyStar from "../../assets/Vector.svg";
import fullStar from "../../assets/fullStar.svg";
import { useState } from "react";

function Mail(props) {
  const [star, setStar] = useState(true);
  let read = true;
  return (
    <div
      className={style.container}
      style={read ? { backgroundColor: "#F4F6F8" } : null}
    >
      <div>
        <img className={style.img} src={avatar} alt="mail Logo" />
      </div>
      <div className={style.boxText}>
        <h4 className={style.name}>Jessica Koel</h4>
        <p className={style.text}>Hey jontray, do you remember...</p>
      </div>
      <div className={style.boxTime}>
        <p className={style.time}>12:39</p>
        {!read ? (
          <p className={style.number}>1</p>
        ) : (
          <img
            src={star ? fullStar : emptyStar}
            onClick={() => setStar(!star)}
            className={style.star}
          />
        )}
      </div>
    </div>
  );
}

export default Mail;
