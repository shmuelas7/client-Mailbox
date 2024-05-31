import style from "./style.module.css";
import TextArea from "../../components/TextArea/TextArea";
import api from "../../api/api";


async function getUsers(){
   let res =await api.get("user/Users");
   console.log(res);
}
function NewMessages() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Send new message</p>
      </div>
      <form>
        <div className={style.input}>
          <label htmlFor="Subject"> Subject</label>
          <input type="text" id="Subject" placeholder="subject..."></input>
        </div>
        <div className={style.input2}>
          <label htmlFor="to"> To</label>
          <input type="text" id="to" onFocus={()=>{getUsers()}}></input>
          <button>Add</button>
        </div>
        <div className={style.textArea}>
          <label>Message</label>
          <TextArea />
        </div>
      </form>
    </div>
  );
}

export default NewMessages;
