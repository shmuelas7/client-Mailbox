import style from "./style.module.css";
import { AiOutlineBold } from "react-icons/ai";
import { AiOutlineItalic } from "react-icons/ai";
import { AiOutlineUnderline } from "react-icons/ai";
import { BsPaintBucket } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsTextLeft } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";
import { BsTextRight } from "react-icons/bs";
import { BsJustify } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import ButtonSave from "../ButtonSave/ButtonSave";
import { AiFillPicture } from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";

function TextArea({func,content, setContent }) {
  
  return (
    <div className={style.container}>
      <textarea
        id="richTextEditor"
        onChange={(e)=>{setContent(e.target.value)}}
        value={content}
        rows={10}
        cols={50}
        className={style.editorTextarea}
        placeholder="Write your message..."
      />
      <div className={style.box}>
        <div className={style.toolbar}>
          <button  className={style.toolbarBtn}>
            <AiOutlineBold size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <AiOutlineItalic size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <AiOutlineUnderline size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <BsPaintBucket size={24} />
          </button>
        </div>
        <div className={style.toolbarTwo}>
          <button  className={style.toolbarBtn}>
            <AiOutlineOrderedList size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <AiOutlineUnorderedList size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <BsTextLeft size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <BsTextCenter size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <BsTextRight size={24} />
          </button>
          <button  className={style.toolbarBtn}>
            <BsJustify size={24} />
          </button>
        </div>
      </div>
      <div className={style.boxButton}>
        <div className={style.rightButtonBox}>
          <GrAttachment className={style.icon} />
          <AiFillPicture className={style.icon} />
        </div>
        <div className={style.rightButtonBox}>
          <FaTrash className={style.icon} />
          <HiDotsVertical className={style.icon} />
          <div onClick={()=>{func()}} >
          <ButtonSave  />
            </div>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
