import Search from "../../components/Search/Search";
import style from "./style.module.css";
import Mail from "../../components/Mail/Mail";
import { Outlet, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/api";

function Inbox() {
  let { inbox } = useParams();
  const [search, setSearch] = useState(null);

  const [data, setData] = useState(null);
  const [unRead, setUnRead] = useOutletContext();
  useEffect(() => {
    const getData = async () => {
      //get all chat by flag ...inbox, favorite etc..
      const x = await api.get(`/chat/flag/${inbox}`);
      setData(x.data);
    };
    getData();
  }, [inbox]);

  async function updateSearch() {
    console.log(search);
    api.get(`/chat/search?search=${search}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }
  async function update(id, flag) {
    try {
      //update isRead / isFavorite/etc...
      let res = await api.put(`/chat/${id}`, flag);
      //update number of unread message
      const x = await api.get("/chat/not-read");
      setUnRead(x.data);
    } catch {
      throw console.error();
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <div className={style.container}>
        <div className={style.interContainer}>
          <div className={style.Search}>
            <Search setSearch={setSearch} search={search} func={updateSearch} />
          </div>
          <div className={style.mail}>
            {data &&
              data.map((value) => {
                return (
                  <div key={value._id}>
                    <Mail
                      chat={value}
                      id={value.chat._id}
                      isRead={value.isRead}
                      isFavorite={value.isFavorite}
                      date={value.chat.lastDate}
                      subject={value.chat.subject}
                      img={value.chat.members[0].avatar}
                      updateIsRead={update}
                      name={value.chat.members[0].fullName}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Inbox;
