import React, { Fragment, useState } from "react";
import "./App.css";
import AddData from "./components/AddData";
import AddUserList from "./components/AddUserList";
function App() {
  const [UsersList, setUserList] = useState([]);
  const AddUserHandler = (uname, uAge, uClg) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uname, age: uAge, clg: uClg, id: Math.random().toString() },
      ];
    });
  };

  return (
    //  Adding Fragment here <React.Fragment> using fragment here 5t
    <Fragment>
      <AddData onAddUser={AddUserHandler} />
      <AddUserList users={UsersList} />
    </Fragment>
    //</React.Fragment>
  );
}

export default App;
