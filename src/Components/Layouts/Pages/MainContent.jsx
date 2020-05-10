import React from "react";
import classes from "./Welcome/WelcomePage.module.css";

const MainContent = () => {
  const image = {
    id: "big_school_logo",
    src: require("../../../Images/logo192.png"),
    alt: "School Logo",
  };
  const school_name = "Socket University of Technology";
  const address = "Lekki Phase 1, Lagos.";
  return (
    <div className="row">
      <div className={"col-md-8 offset-md-2 " + classes.Content}>
        <div className="row">
          <div className="col-sm-6 offset-sm-3 text-center">
            <img
              className="img-fluid rounded mx-auto d-block"
              id={image.id || ""}
              src={image.src || ""}
              alt={image.alt || ""}
            ></img>

            <h4>{school_name}</h4>
            <h6>{address}</h6>
          </div>
          {/* <div class="col-sm-3">
                                <img id="pic" src="webroot/img/pic.png" alt="AKSCO">
                            </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
