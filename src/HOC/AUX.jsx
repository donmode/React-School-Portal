import Modal from "react-modal";
import React from "react";
Modal.setAppElement("#root");
const Aux = (props) => {
  let statusClass = "";
  if (props.status === "success") {
    statusClass = "btn btn-sm btn-success";
  } else if (props.status === "warning") {
    statusClass = "btn btn-sm btn-warning";
  } else {
    statusClass = "btn btn-sm btn-danger";
  }
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
        <button onClick={props.closeModal} className={statusClass}>
          close
        </button>
        <div className="p-5">{props.contents}</div>
      </Modal>
      {props.children}
    </div>
  );
};

export default Aux;
