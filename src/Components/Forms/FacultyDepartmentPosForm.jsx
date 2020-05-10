import React from "react";
import Aux from "../../HOC/AUX";
import classes from "./Forms.module.css";
const fetchOptions = (collection, option = "") => {
  if (collection.length > 0) {
    let options = collection.map((item) => {
      const id = [...Object.keys(item)];
      const value = [...Object.values(item)];
      return (
        <option key={id} value={id}>
          {value}
        </option>
      );
    });
    if (option) {
      options.unshift(option);
    }
    return options;
  }
};
const FacultyDepartmentPosForm = (props) => {
  const faculty = {};
  const department = {};
  const pos = {};
  const DepartmentList = {};
  const PosList = {};
  const departmentIntro = (
    <option key={0} value="">
      Select Department
    </option>
  );
  const posIntro = (
    <option key={0} value="">
      Select Program of Study
    </option>
  );
  if (props.faculty.hasOwnProperty(props.index)) {
    faculty[props.index] = props.faculty[props.index][`faculty${props.index}`];
    if (props.department.departmentsLists.hasOwnProperty(props.index)) {
      DepartmentList[props.index] =
        props.department.departmentsLists[props.index];
    }
  }

  if (props.department.hasOwnProperty(props.index)) {
    department[props.index] =
      props.department[props.index][`department${props.index}`];
    if (props.pos.posLists.hasOwnProperty(props.index)) {
      PosList[props.index] = props.pos.posLists[props.index];
    }
  }

  if (props.pos.hasOwnProperty(props.index)) {
    pos[props.index] = props.pos[props.index][`pos${props.index}`];
  }

  return (
    <Aux>
      <h4>{props.title}</h4>
      <div className="form-group">
        <label className={classes.Label} htmlFor={`faculty${props.index}`}>
          Faculty
        </label>
        <select
          className="form-control"
          name={`faculty${props.index}`}
          id={`faculty${props.index}`}
          value={faculty[props.index]}
          onChange={props.handleChange}
          aria-describedby={`faculty${props.index}Help`}
          required="required"
        >
          <option value="">Select Faculty</option>
          {fetchOptions(props.faculty.facultiesLists)}
        </select>
        <small
          id={`faculty${props.index}Help`}
          className="form-text text-muted"
        >
          Kindly select faculty
        </small>
      </div>
      <div className="form-group">
        <label className={classes.Label} htmlFor={`department${props.index}`}>
          Department
        </label>
        <select
          className="form-control"
          name={`department${props.index}`}
          id={`department${props.index}`}
          value={department[props.index]}
          onChange={props.handleChange}
          aria-describedby={`department${props.index}Help`}
          required="required"
        >
          {DepartmentList.hasOwnProperty(props.index)
            ? fetchOptions(DepartmentList[props.index], departmentIntro)
            : ""}
        </select>
        <small
          id={`department${props.index}Help`}
          className="form-text text-muted"
        >
          Kindly select department
        </small>
      </div>
      <div className="form-group">
        <label className={classes.Label} htmlFor={`pos${props.index}`}>
          Program of Study
        </label>
        <select
          className="form-control"
          name={`pos${props.index}`}
          id={`pos${props.index}`}
          value={pos[props.index]}
          onChange={props.handleChange}
          aria-describedby={`pos${props.index}Help`}
          required="required"
        >
          {PosList.hasOwnProperty(props.index)
            ? fetchOptions(PosList[props.index], posIntro)
            : ""}
        </select>
        <small id={`pos${props.index}Help`} className="form-text text-muted">
          Kindly select Program of Study (POS)
        </small>
      </div>
    </Aux>
  );
};

export default FacultyDepartmentPosForm;
