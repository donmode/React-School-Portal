import Modal from "react-modal";
import React from "react";
Modal.setAppElement("#root");
const Aux = (props) => {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={{
          content: {
            top: "30%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        contentLabel={props.Label}
      >
        <button onClick={props.closeModal} className="btn btn-sm btn-danger">
          close
        </button>
        <div className="p-5">{props.contents}</div>
      </Modal>
      {props.children}
    </div>
  );
};

export default Aux;
