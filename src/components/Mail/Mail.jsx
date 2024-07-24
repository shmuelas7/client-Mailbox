import style from "./style.module.css";

import emptyStar from "../../assets/Vector.svg";
import fullStar from "../../assets/fullStar.svg";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Mail({
  isRead,
  date,
  subject,
  img,
  isFavorite,
  updateIsRead,
  chat,
  id,
  name,
}) {
  const [read, setRead] = useState(isRead);
  const [favorite, setFavorite] = useState(isFavorite);

  const chatMetadata = {};

  const msgArr = chat?.chat?.msg;
  const lastMember = chat?.chat?.members.find(
    (member) => member._id === msgArr[msgArr.length - 1].from
  );
  const oneBeforeLastMember = chat?.chat?.members.find(
    (member) => member._id === msgArr[msgArr.length - 2]?.from
  );
  chatMetadata.img = lastMember?.avatar;
  chatMetadata.names = `${lastMember?.fullName}${
    oneBeforeLastMember ? `,${oneBeforeLastMember.fullName}` : ""
  }${chat?.chat?.members.length - 2 > 0 ? `, +${chat?.chat.members.length - 2}` : ""}`;

  chatMetadata.content = chat?.chat?.msg[chat?.chat?.msg.length - 1].content;

  const navigate = useNavigate();

  function update() {
    if (!read) {
      updateIsRead(id, { isRead: true });
      setRead(true);
    }
    navigate(id);
  }
  return (
    <div className={read ? style.containerActive : style.containerNotActive}>
      <div className={style.leftBox} onClick={update}>
        <div>
          <img className={style.img} src={chatMetadata.img} alt="mail Logo" />
        </div>
        <div className={style.boxText}>
          <h4 className={style.name}>{chatMetadata.names}</h4>
          <p className={style.text}>{chatMetadata.content}</p>
        </div>
      </div>
      <div className={style.boxTime}>
        <p className={style.time}>
          {new Date(date).getHours()}
          {new Date(date).getMinutes()}
        </p>

        <img
          src={favorite ? fullStar : emptyStar}
          onClick={() => {
            updateIsRead(id, { isFavorite: !isFavorite });
            setFavorite(!favorite);
          }}
          className={style.star}
        />
      </div>
    </div>
  );
}

export default Mail;
