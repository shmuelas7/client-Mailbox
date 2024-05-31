import Login from "../pages/Login/Login";
import style from "./style.module.css";
import Stats from "../pages/Stats/Stats";
import Emails from "../pages/Emails/Emails";
import Conversation from "../pages/Conversation/Conversation";
import NewMessages from "../pages/NewMessage/NewMessage";
import Inbox from "../pages/Inbox/Inbox";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
function Layout() {
  const user = useContext(UserContext);
  return (
    <div className={style.container}>
      <Routes>
        {Object.keys(user).length ? (
          <>
            <Route path="/" element={<Stats />}>
              <Route path="emails" element={<Emails />}>
                <Route path=":inbox" element={<Inbox />}>
                  <Route path=":chatId" element={<Conversation />} />
                </Route>
                <Route path="new-message" element={<NewMessages />} />
              </Route>
            </Route>
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="login" element={<Login />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default Layout;
