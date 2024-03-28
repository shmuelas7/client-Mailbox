import group from "../../assets/Group.svg";
import style from "./style.module.css";

function Inbox(props) {
  let x = true;
  return (
    <div className={style.container}>
      <div>
        <img className={style.img} src={group} alt="group" />
      </div>
      <div className={style.box} style={x ? null : { color: "#00A389" }}>
        <p>Inbox</p>

        {x && <p className={style.number}>1</p>}
      </div>
    </div>
  );
}

export default Inbox;
