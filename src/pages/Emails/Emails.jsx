import Inbox from "../../components/Inbox/Inbox";
import style from "./style.module.css";
import { LiaTelegram } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import NewMessages from "../../components/NewMessage/NewMessage";
import Label from "../../components/Labels/Labels";
import { MdLabel } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";

function Emails() {
  const navigate = useNavigate();
  const [unRead, setUnRead] = useState(null);
  useEffect(() => {
    const getData = async () => {
      //get the number of unRead message
      const res = await api.get("/chat/not-read");
      setUnRead(res.data);
    };
    getData();
  }, []);
  return (
    <div style={{ display: "flex",flexGrow:"1" }}>
      {!unRead ? (
        <h1>hh</h1>
      ) : (
        <div className={style.container}>
          <div className={style.text}>
            <div
              className={style.headLineIcon}
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowBack
                size={24}
                className={style.firstIcon}
                color="#A2AAB4"
              />
            </div>
            <h2>Mailbox</h2>
          </div>

          <ul className={style.list}>
            <li
              className={style.newMessage}
              onClick={() => {
                navigate("new-message");
              }}
            >
              <NewMessages />
            </li>
            <li
              onClick={() => {
                navigate("/emails/inbox");
              }}
            >
              <Inbox
                icon={<HiMiniInboxArrowDown size={24} />}
                text="Inbox"
                number={unRead.inbox}
              ></Inbox>
            </li>
            <li
              onClick={() => {
                navigate("/emails/sent");
              }}
            >
              <Inbox
                icon={<LiaTelegram size={24} />}
                text="Sent Emails"
                number={unRead.sentEmails}
              ></Inbox>
            </li>

            <li
              onClick={() => {
                navigate("/emails/favorite");
              }}
            >
              <Inbox
                icon={<AiFillStar size={24} />}
                text="Favorite"
                number={unRead.Favorite}
              />
            </li>
            <li
              onClick={() => {
                navigate("/emails/draft");
              }}
            >
              <Inbox icon={<BsPencil size={24} />} text="Draft" />
            </li>
            <li
              onClick={() => {
                navigate("/emails/deleted");
              }}
            >
              <Inbox icon={<AiOutlineDelete size={24} />} text="Deleted" />
            </li>
            <li className={style.more}>
              <Inbox icon={<MdExpandMore size={24} />} text="More" />
            </li>
          </ul>
          <h3 className={style.headLabel}>Labels</h3>

          <ul className={style.LabelList}>
            <li>
              <Label icon={<MdLabel size={30} color="#B3BDCC" />} text="Work" />
            </li>
            <li>
              <Label
                icon={<MdLabel color="#FD5E5E" size={30} />}
                text="Work In Progress"
              />
            </li>
            <li>
              <Label
                icon={<MdLabel size={30} color="#FFD700" />}
                text="Personal"
              />
            </li>
            <li>
              <Label
                icon={<MdLabel size={30} color="#FF6347" />}
                text="Urgent"
              />
            </li>
            <li>
              <Label
                icon={<MdLabel size={30} color="#FFA07A" />}
                text="Important"
              />
            </li>
            <li>
              <Label
                icon={<MdLabel size={30} color="#6495ED" />}
                text="family"
              />
            </li>
            <li>
              <Label
                icon={<MdLabel size={30} color="#FFB6C1" />}
                text="social"
              />
            </li>
          </ul>
        </div>
      )}
      <Outlet context={[unRead, setUnRead]} />
    </div>
  );
}

export default Emails;
