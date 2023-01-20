import React from "react";
import "./ErrModel.css";
const ErrModel = (props) => {
  return (
    <>
      <div className="card" onClick={props.onConfirm}>
        <div className="model">
          <div class="header">
            <h4>{props.title}</h4>
          </div>
          <div class="Errbody">
            <p>{props.message}</p>
          </div>
          <footer className="FooterErr">
            <button onClick={props.onConfirm}>Okay</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ErrModel;
