import style from "./style.module.css";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import shturdel from "../../assets/shtrudel.svg";
import imgLogin from "../../assets/imgLogin.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState();
  return (
    <div className={style.container}>
      <div className={style.leftBox}>
        <HeaderLogin />
        <div className={style.headLine}>
          <h1>Forgot Password</h1>
        </div>
        <p className={style.text}>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <div className={style.boxInput}>
          <div className={style.input}>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <img src={shturdel} />
          </div>

          <div className={style.forgetPassword}>
            <Link to="/login">Back to Login</Link>
          </div>
          <button type="button" className={style.SignIn}>
            Send reset link
          </button>
        </div>
      </div>

      <div className={style.rightBox}>
        <img src={imgLogin} className={style.img}></img>
      </div>
    </div>
  );
}
