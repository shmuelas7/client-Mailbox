
import Layout from "./Layout/Layout";
import { useState, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { DataContext } from "./context/dataContext";
import api from "./api/api";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({});
  const navigate = useNavigate;

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <DataContext.Provider value={{ userData, setUserData }}>
          <Layout />
        </DataContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
