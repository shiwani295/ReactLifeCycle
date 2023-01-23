import React from "react";
import ReactDOM from "react-dom";
import "./ErrModel.css";
const ErrModel = (props) => {
  //here slipt my model two seperate component
  const Backdrop = (props) => {
    return <div className="backdrop_card" onClick={props.onConfirm} />;
  };

  const ModelOverlay = (props) => {
    return (
      <div className="model_overlay">
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
    );
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("model-root")
      )}
    </React.Fragment>
  );
};

export default ErrModel;
