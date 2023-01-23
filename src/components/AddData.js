import React, { useState } from "react";
import "./AddData.css";
import ErrModel from "./ErrModel";
import Wrapper from "./Helpers/Wrapper";

const AddData = (props) => {
  const [Username, setUsername] = useState("");
  const [Age, setAge] = useState("");
  const [Err, setErr] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (Username.trim().length === 0 || Age.trim().length === 0) {
      setErr({
        title: "Invalid Input",
        message: "Please Enter a valid name and age",
      });
      return;
    }
    if (+Age < 1) {
      setErr({
        title: "Invalid Age",
        message: "Please Enter a valid name and age>0",
      });
      return;
    }
    props.onAddUser(Username, Age);
    setUsername("");
    setAge("");
  };

  const NameHandler = (event) => {
    setUsername(event.target.value);
  };
  const AgeHandler = (event) => {
    setAge(event.target.value);
  };

  const ErrHandler = () => {
    setErr(null);
  };

  return (
    <Wrapper>
      {Err && (
        <ErrModel
          title={Err.title}
          message={Err.message}
          onConfirm={ErrHandler}
        />
      )}

      <div className="Addform">
        <form className="form" onSubmit={AddUserHandler}>
          <div className="form-group">
            <br />
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              className="form-control"
              value={Username}
              id="name"
              placeholder="Enter Name"
              onChange={NameHandler}
            />
            <br />
            <label htmlFor="number">Age (Year)</label>
            <input
              type="number"
              className="form-control"
              value={Age}
              id="number"
              placeholder="Enter Age"
              onChange={AgeHandler}
            />

            <br />
            <button type="submit" className="Addage">
              Add Age
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default AddData;
