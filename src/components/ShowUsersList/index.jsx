import { useState } from "react";
import style from "./style.module.css";


function ShowUserList({ userList, tempUsers, setTempUsers, }) {

    const addToArr = (id) => {
        let res = tempUsers.find(u => u == id);
        console.log(res)
        if (!res)
            setTempUsers([...tempUsers, id])
        else {
            res = tempUsers.filter((user) => id !== user)
            setTempUsers(res)
        }
    }
    return (
        <div className={style.container}>
            {userList?.map((user) => {
                return (
                    <div key={user._id} className={style.userListBox} style={tempUsers.find(u => u == user._id) ? { backgroundColor: "#F1F1F1" } : null} onClick={() => { addToArr(user._id) }}>
                        <img src={user.avatar} />
                        <p>{user.fullName}</p>
                    </div>)
            })}
        </div>
    );
}

export default ShowUserList;
