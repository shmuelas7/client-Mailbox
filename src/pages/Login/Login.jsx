import style from "./style.module.css";
import imgLogin from "../../assets/imgLogin.svg";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import shturdel from "../../assets/shtrudel.svg";
import M from "../../assets/logos_google-gmail.svg";
import pass from "../../assets/mdi_password-outline.svg";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  async function connect() {
    const data = await api.get("/user");
    if (data) {
      setUser(data.data);
      navigate("/");
    }
  }

  return (
    <div className={style.container}>
      <div className={style.leftBox}>
        <HeaderLogin />
        <div className={style.headLine}>
          <h1>Welcome to Mailbox</h1>
        </div>
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
          <div className={style.input}>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <img src={pass} />
          </div>
          <div className={style.forgetPassword}>
            <Link to="/forgetPassword">Forget password ?</Link>
          </div>
          <button type="button" className={style.SignIn} onClick={connect}>
            Sign in
          </button>
          <p>
            Don't have an account?<Link>Register Here </Link>
          </p>
          <div className={style.boxOr}>
            <div className={style.leftLine}></div>
            <p>OR</p>
            <div className={style.rightLine}></div>
          </div>
          <button className={style.Mbtn}>
            <img src={M}></img> <p>Sign in with Google</p>
          </button>
        </div>
      </div>

      <div className={style.rightBox}>
        <img src={imgLogin} className={style.img}></img>
      </div>
    </div>
  );
}
