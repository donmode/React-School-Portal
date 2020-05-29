import React, { Component } from "react";
import Form from "../../HOC/Form";
import BasicBiodataForm from "../../Components/Forms/BasicBiodataForm";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import FacultyDepartmentPosForm from "../../Components/Forms/FacultyDepartmentPosForm";
import ModeofAdmissionAcademicSessionForm from "../../Components/Forms/ModeofAdmissionAcademicSessionForm";
import Aux from "../../HOC/AUX";

import store from "../../Redux/Reducers";

import { Store as SaveApplication } from "../../Redux/Actions/ApplicationActions";

import {
  Lists as SchoolList,
  SchoolProgramProps,
} from "../../Redux/Actions/SchoolProgramActions";

import {
  Lists as AcademicSessionList,
  AcademicSessionProps,
} from "../../Redux/Actions/AcademicSessionActions";

import {
  ListBySchools as ModeOfAdmissionListBySchool,
  ModeOfAdmissionProps,
} from "../../Redux/Actions/ModeOfAdmissionActions";

import {
  ListByFaculties as DepartmentListByFaculty,
  DepartmentProps,
} from "../../Redux/Actions/DepartmentActions";

import {
  ListBySchoolProgramDepartment as PosListByScoolProgramDepartment,
  PosProps,
} from "../../Redux/Actions/PosActions";

import { ListApplicationSettingByName as ApplicationSettingListByName } from "../../Redux/Actions/ApplicationSettingActions";

import {
  Lists as FacultyList,
  FacultyProps,
} from "../../Redux/Actions/FacultyActions";

import { BasicBiodataProps } from "../../Redux/Actions/BasicBiodataActions";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class OnlineApplicationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // BasicBiodataProps
      biodataFields: [
        "firstname",
        "middlename",
        "lastname",
        "email",
        "confirm_email",
      ],
      isOpen: false,
      modalContent: "",
      applied: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    store.dispatch(SchoolList());
    store.dispatch(AcademicSessionList());
    store.dispatch(FacultyList());
    store.dispatch(ApplicationSettingListByName("application_choice"));
  }

  closeModal() {
    return this.setState({ isOpen: false });
  }

  setFacultyDepartmentPos(application_choice) {
    let FacultyDepartmentPos = [];
    const choices = ["First Choice", "Second Choice", "Third Choice"];
    for (let index = 0; index < Number(application_choice); index++) {
      FacultyDepartmentPos.push(
        <FacultyDepartmentPosForm
          handleChange={this.handleChange}
          faculty={this.props.faculties}
          department={this.props.departments}
          pos={this.props.pos}
          title={choices[index]}
          key={index}
          index={index}
        />
      );
    }
    return FacultyDepartmentPos;
  }

  handleChange(event) {
    const numberOfChoices = this.props.applicationSettings[0]
      .application_choice;
    // const schoolProgramId = this.props.schoolPrograms
    const faculties = [];
    const departments = [];
    const pos = [];
    for (let index = 0; index < Number(numberOfChoices); index++) {
      faculties.push("faculty" + index);
      departments.push("department" + index);
      pos.push("pos" + index);
    }

    if (event.target.name === "school_program") {
      //fetch dropdown values dependent on schoolProgram
      store.dispatch(ModeOfAdmissionListBySchool(event.target.value));

      //set props from School Program
      const schoolProgramObj = { [event.target.name]: event.target.value };
      store.dispatch(SchoolProgramProps(schoolProgramObj));
    } else if (event.target.name === "mode_of_admission") {
      //set props for mode of admission
      const modeOfAdmissionObj = { [event.target.name]: event.target.value };
      store.dispatch(ModeOfAdmissionProps(modeOfAdmissionObj));
    } else if (event.target.name === "academic_session") {
      //set props for academic session
      const academicSessionObj = { [event.target.name]: event.target.value };
      store.dispatch(AcademicSessionProps(academicSessionObj));
    } else if (faculties.includes(event.target.name)) {
      if (
        !this.props.schoolPrograms.hasOwnProperty("school_program") ||
        !this.props.modeOfAdmissions.hasOwnProperty("mode_of_admission")
      ) {
        event.target.value = "";
        return this.setState({
          modalContent:
            "Kindly select a School Program and Mode of Admission to proceed!",
          isOpen: true,
        });
      }
      //fetch dropdown values dependent on faculty
      const key = event.target.name.replace("faculty", "");
      store.dispatch(DepartmentListByFaculty(key, event.target.value));

      //set facuty value in the store
      const facultyObj = { [key]: { [event.target.name]: event.target.value } };
      store.dispatch(FacultyProps(facultyObj));
    } else if (departments.includes(event.target.name)) {
      const key = event.target.name.replace("department", "");

      if (
        this.props.schoolPrograms.school_program === "" ||
        this.props.modeOfAdmissions.mode_of_admission === ""
      ) {
        const faculty = document.getElementById(`faculty${key}`);
        faculty.value = "";
        event.target.value = "";
        return this.setState({
          modalContent:
            "Kindly select a School Program and Mode of Admission to proceed!",
          isOpen: true,
        });
      }
      const school_program_id = this.props.schoolPrograms.school_program;
      store.dispatch(
        PosListByScoolProgramDepartment(
          key,
          school_program_id,
          event.target.value
        )
      );
      const departmentObj = {
        [key]: { [event.target.name]: event.target.value },
      };
      store.dispatch(DepartmentProps(departmentObj));
    } else if (pos.includes(event.target.name)) {
      const key = event.target.name.replace("pos", "");
      const posObj = {
        [key]: { [event.target.name]: event.target.value },
      };
      store.dispatch(PosProps(posObj));
    } else if (this.state.biodataFields.includes(event.target.name)) {
      //set props for basic biodata
      const basicBiodataObj = { [event.target.name]: event.target.value };
      store.dispatch(BasicBiodataProps(basicBiodataObj));
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    let form_field = {};
    form_field["first_name"] = this.props.biodata.firstname;
    form_field["last_name"] = this.props.biodata.lastname;
    form_field["other_names"] = this.props.biodata.middlename;
    form_field["email"] = this.props.biodata.email;
    delete form_field["confirm_email"];
    form_field["mode_of_admission_id"] = Number(
      this.props.modeOfAdmissions.mode_of_admission
    );
    form_field["academic_session_id"] = Number(
      this.props.academicSessions.academic_session
    );
    form_field["school_program_id"] = Number(
      this.props.schoolPrograms.school_program
    );

    let pos = [];
    const choiceLength = Number(
      this.props.applicationSettings[0].application_choice
    );
    for (let index = 0; index < choiceLength; index++) {
      pos.push(this.props.pos[index][`pos${index}`]);
    }
    form_field["pos"] = pos;

    const saved = await store.dispatch(SaveApplication(form_field));
    if (saved) {
      return this.setState({ applied: true });
    } else {
      return this.setState({
        modalContent: "unable to create application",
        isOpen: true,
      });
    }
  }

  render() {
    if (this.state.applied === true) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              username: this.props.biodata.email,
              isOpen: true,
              status: "success",
              contents:
                "Application created successfully! Kindly check your mail for you login credentials",
            },
          }}
        />
      );
    }
    let application_choice = "";
    if (this.props.applicationSettings[0] !== undefined) {
      application_choice = this.props.applicationSettings[0].application_choice;
      application_choice = this.setFacultyDepartmentPos(application_choice);
    }
    return (
      <Aux
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        contents={this.state.modalContent}
      >
        <Form onSubmit={this.handleSubmit}>
          <BasicBiodataForm
            handleChange={this.handleChange}
            biodata={this.props.biodata}
          />
          <ModeofAdmissionAcademicSessionForm
            handleChange={this.handleChange}
            schoolPrograms={this.props.schoolPrograms}
            modeOfAdmissions={this.props.modeOfAdmissions}
            academicSessions={this.props.academicSessions}
          />

          {application_choice !== "" ? application_choice : ""}

          <SubmitButton />
        </Form>
      </Aux>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    schoolPrograms: store.school_programs,
    modeOfAdmissions: store.mode_of_admissions,
    academicSessions: store.academic_sessions,
    biodata: store.biodata,
    applicationSettings: store.application_settings,
    faculties: store.faculties,
    departments: store.departments,
    pos: store.pos,
    applications: store.applications,
  };
};

export default connect(mapStateToProps)(OnlineApplicationContainer);
