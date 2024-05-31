import style from "./style.module.css";
import light from "../../assets/light.svg";
import { IoMdTimer } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { BsCameraVideoFill } from "react-icons/bs";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Stats() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" ,flexGrow:"1"}}>
      <div className={style.container}>
        <div>
          <img src={light} className={style.img} />
        </div>
        <ul className={style.list}>
          <li className={style.icon}>
            <div className={style.box}>
              <IoMdTimer />
            </div>
          </li>
          <li className={style.icon}>
            <div className={style.box}>
              <BiTask />
            </div>
          </li>

          <li className={style.icon}>
            <div className={style.box}>
              <BsEye />
            </div>
          </li>
          <li
            className={style.icon}
            onClick={() => {
              navigate("/emails");
            }}
          >
            <div className={style.box}>
              <BsPeopleFill />
            </div>
          </li>
          <li className={style.icon}>
            <div className={style.box}>
              <IoIosStats />
            </div>
          </li>
          <li className={style.icon}>
            <div className={style.box}>
              <BsCameraVideoFill />
            </div>
          </li>
        </ul>

        <img src={user?.avatar} alt="" className={style.img} />
      </div>
      <Outlet />
    </div>
  );
}

export default Stats;
