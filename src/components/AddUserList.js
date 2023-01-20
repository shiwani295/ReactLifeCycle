import React from "react";
import "./AddData.css";
const AddUserList = (props) => {
  return (
    // <div className="addUserlist">
    <ul className="addUserlist">
      {props.users.map((user) => {
        return (
          <li key={user.id} className="userDetail">
            {user.name} ({user.age} year old)
          </li>
        );
      })}
    </ul>
    // </div>
  );
};

export default AddUserList;
