import React, { useRef, useState } from "react";
import "./AddData.css";
import ErrModel from "./ErrModel";
import Wrapper from "./Helpers/Wrapper";

const AddData = (props) => {
  const NameInputRef = useRef();
  const AgeInputRef = useRef();
  const ClgInputRef = useRef();
  const [Err, setErr] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();
    const InputNameEnteredValue = NameInputRef.current.value;
    const InputAgeEnteredValue = AgeInputRef.current.value;
    const InputClgEnteredValue = ClgInputRef.current.value;

    if (
      InputNameEnteredValue.trim().length === 0 ||
      InputAgeEnteredValue.trim().length === 0 ||
      InputClgEnteredValue.trim().length === 0
    ) {
      setErr({
        title: "Invalid Input",
        message: "Please Enter a valid name , age and collage",
      });
      return;
    }
    if (+InputAgeEnteredValue < 1) {
      setErr({
        title: "Invalid Age",
        message: "Please Enter a valid Age (age > 0) ",
      });
      return;
    }
    props.onAddUser(
      InputNameEnteredValue,
      InputAgeEnteredValue,
      InputClgEnteredValue
    );
    NameInputRef.current.value = "";
    AgeInputRef.current.value = "";
    ClgInputRef.current.value = "";
  };

  const ErrHandler = () => {
    setErr(null);
  };

  return (
    //here we are using wrapper 5t
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
              id="name"
              placeholder="Enter Name"
              ref={NameInputRef}
            />
            <br />
            <label htmlFor="number">Age (Year)</label>
            <input
              type="number"
              className="form-control"
              id="number"
              placeholder="Enter Age"
              ref={AgeInputRef}
            />

            <br />
            <br />
            <label htmlFor="clg">Collage </label>
            <input
              type="text"
              className="form-control"
              id="clg"
              placeholder="Enter Collage name"
              ref={ClgInputRef}
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
