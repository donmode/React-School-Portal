import React from "react";

const form = (props) => {
  let file = "";
  if (props.file) {
    file = props.file;
  }
  return (
    <div className="row">
      <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2">
        <form onSubmit={props.onSubmit} {...file}>
          <div className="row">
            <div className="col-sm-12 col-md-12">{props.children}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default form;
