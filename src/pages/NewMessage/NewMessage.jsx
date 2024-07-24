import style from "./style.module.css";
import TextArea from "../../components/TextArea/TextArea";
import api from "../../api/api";
import ShowUserList from "../../components/ShowUsersList"
import { useEffect, useState } from "react";


async function getUsers() {

}
function NewMessages() {
  const [userList, setUserList] = useState()
  const [tempUsers, setTempUsers] = useState([])
  const [openUserList, setOpenUserList] = useState(false)
  const [placeHolderText, setPlaceHolderText] = useState("")
  const [text, setText] = useState([])
  const [subject, setSubject] = useState("")
  const handelOnClick = (e) => {
    e.preventDefault()
    setOpenUserList(false)
    handelPlaceHolder()
  }

  const handelPlaceHolder = () => {
    let res = ""
    for (let user of userList) {
      for (let c of tempUsers) {
        if (user._id == c)
          res += user.fullName + ","
      }
    }
    setPlaceHolderText(res)
    console.log(res)
  }

  const sendData = () => {
    api.post('/chat/createMessage', { subject: subject, msg: text, members: tempUsers })
  }


  useEffect(() => {
    api.get("user/Users").then((res) => {
      setUserList(res.data)
    })

  }, [])
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Send new message</p>
      </div>
      <form>
        <div className={style.input}>
          <label htmlFor="Subject"> Subject</label>
          <input type="text" id="Subject" placeholder="subject..." onChange={(e) => { setSubject(e.target.value) }}></input>
        </div>
        <div className={style.input2}>
          <div className={style.boxInput2} >
            <label htmlFor="to"> To</label>
            <input
              type="text"
              id="to"
              onFocus={() => { setOpenUserList(true) }}
              placeholder={placeHolderText}
            >

            </input>
            <button onClick={(e) => { handelOnClick(e) }}>Add</button>
          </div>
          {openUserList ?
            <div className={style.list}>

              <ShowUserList userList={userList} tempUsers={tempUsers} setTempUsers={setTempUsers} />
            </div>
            : null}
        </div>
        <div className={style.textArea}>
          <label>Message</label>
          <TextArea func={sendData} content={text} setContent={setText} />
        </div>
      </form >
    </div >
  );
}

export default NewMessages;
