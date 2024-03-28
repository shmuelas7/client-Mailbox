import NewMessages from "./components/NewMessage/NewMessage.jsx";
import Inbox from "./components/Inbox/Inbox.jsx";
import Mail from "./components/Mail/Mail.jsx";
import Message from "./components/Message/Message.jsx";
import MessageOpen from "./components/MessageOpen/MessageOpen.jsx";
import TitleMail from "./components/TitleMail/TitleMail.jsx";
import MenuOptions from "./components/MenuOptions/MenuOptions.jsx";

function App() {
  return (
    <>
      <NewMessages />
      <Inbox />
      <Mail />
      <TitleMail />
      <Message />
      <MessageOpen />
      <MenuOptions />
    </>
  );
}

export default App;
