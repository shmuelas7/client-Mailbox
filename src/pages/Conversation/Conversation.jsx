
import TitleMail from "../../components/TitleMail/TitleMail";
import Message from "../../components/Message/Message";
import style from "./style.module.css";
import TextArea from "../../components/TextArea/TextArea";
import Offers from "../../components/Offers/Offers";
import { useParams } from "react-router-dom";
import { useEffect, useState,useContext, } from "react";
import api from "../../api/api";
import { UserContext } from "../../context/userContext";

function Conversation() {
  let { chatId } = useParams();
  const [chats, setChats] = useState(null);
  const [get, setGet] = useState(true);
  const [content, setContent] = useState("");
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const getData = async () => {
      const res = await api.get(`/chat/chats/${chatId}`);
      //console.log(res.data);
      setChats(res.data);
    };
    getData();
  }, [chatId,get]);

  async function updateChats(){
    if(content.length>0){
        let res = await api.post('chat/addMessage',{
          content:content,
          chatId:chatId
    })
    setGet(!get)
    setContent("")
  }
}
  return (
    <div className={style.container}>
      {!chats ? (
        <h1>hh</h1>
      ) : (
        <>
          <Offers />
          <TitleMail header={chats.subject} time={chats.lastDate} />
          <div className={style.boxMessage}>

            {!chats?<h1>hh</h1>:chats.msg?.map((value) => {
              return (
                <div className={style.message} key={value._id}>
                  <Message
                    message={value.content}
                    date={value.date}
                    from={value.from._id}
                    img={value.from.avatar}
                    name={value.from.fullName}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.textArea}>
            <TextArea 
            func={updateChats} 
            content={content} 
            setContent={setContent} />
          </div>
        </>
      )}
    </div>
  );
}

export default Conversation;
