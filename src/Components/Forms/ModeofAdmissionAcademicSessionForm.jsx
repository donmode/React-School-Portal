import React from "react";
import Aux from "../../HOC/AUX";
import classes from "./Forms.module.css";

const fetchOptions = (collection) => {
  if (collection.length > 0) {
    const options = collection.map((item) => {
      const id = [...Object.keys(item)];
      const value = [...Object.values(item)];
      return (
        <option key={id} value={id}>
          {value}
        </option>
      );
    });
    return options;
  }
};
const ModeofAdmissionAcademicSessionForm = (props) => {
  let school_program = "";
  if (props.schoolPrograms !== undefined) {
    school_program = props.schoolPrograms.school_program;
  }

  let mode_of_admission = "";
  let ModeOfAdmissions = "";
  if (props.modeOfAdmissions !== undefined) {
    ModeOfAdmissions = props.modeOfAdmissions.modeOfAdmissionsLists;
    mode_of_admission = props.modeOfAdmissions.mode_of_admission;
  }

  let academic_session = "";
  let AcademicSessions = "";
  if (props.academicSessions !== undefined) {
    AcademicSessions = props.academicSessions.academicSessionsLists;
    academic_session = props.academicSessions.academic_session;
  }

  return (
    <Aux>
      <h4>Program Choices</h4>
      <div className="row">
        <div className="col-sm-4 col-md-4">
          <div className="form-group">
            <label className={classes.Label} htmlFor="school_program">
              School Program
            </label>
            <select
              className="form-control"
              name="school_program"
              id="school_program"
              value={school_program}
              onChange={props.handleChange}
              aria-describedby="school_programHelp"
              required="required"
            >
              <option value="">Select a school program</option>
              {fetchOptions(props.schoolPrograms.schoolProgramsLists)}
            </select>
          </div>
        </div>
        <div className="col-sm-4 col-md-4">
          <div className="form-group">
            <label className={classes.Label} htmlFor="mode_of_admission">
              Mode of Admission
            </label>
            <select
              className="form-control"
              name="mode_of_admission"
              id="mode_of_admission"
              value={mode_of_admission}
              onChange={props.handleChange}
              required="required"
            >
              {ModeOfAdmissions.length > 0 ? (
                <option value="">Select Mode of Admission</option>
              ) : (
                ""
              )}
              {fetchOptions(ModeOfAdmissions)}
            </select>
          </div>
        </div>
        <div className="col-sm-4 col-md-4">
          <div className="form-group">
            <label className={classes.Label} htmlFor="academic_session">
              Academic Session
            </label>
            <select
              className="form-control"
              name="academic_session"
              id="academic_session"
              value={academic_session}
              onChange={props.handleChange}
              required="required"
            >
              <option value="">Select academic session</option>
              {fetchOptions(AcademicSessions)}
            </select>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default ModeofAdmissionAcademicSessionForm;
