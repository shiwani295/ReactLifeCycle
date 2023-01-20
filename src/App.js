import { useState } from "react";
import "./App.css";
import AddData from "./components/AddData";
import AddUserList from "./components/AddUserList";
function App() {
  const [UsersList, setUserList] = useState([]);
  const AddUserHandler = (uname, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uname, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <div>
        <AddData onAddUser={AddUserHandler} />
        <AddUserList users={UsersList} />
      </div>
    </>
  );
}

export default App;
