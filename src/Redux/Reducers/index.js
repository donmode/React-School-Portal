import AcademicSessionsReducer from "./AcademicSessions";
import DepartmentsReducer from "./Departments";
import FacultiesReducer from "./Faculties";
import ModeOfAdmissionsReducer from "./ModeOfAdmissions";
import PosReducer from "./Pos";
import ApplicationsReducer from "./Applications";
import BasicBiodataReducer from "./BasicBiodata";
import LoginsReducer from "./Logins";
import SchoolProgramsReducer from "./SchoolPrograms";
import ApplicationSettingsReducer from "./ApplicationSettings";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  academic_sessions: AcademicSessionsReducer,
  departments: DepartmentsReducer,
  faculties: FacultiesReducer,
  mode_of_admissions: ModeOfAdmissionsReducer,
  pos: PosReducer,
  applications: ApplicationsReducer,
  biodata: BasicBiodataReducer,
  school_programs: SchoolProgramsReducer,
  application_settings: ApplicationSettingsReducer,
  logins: LoginsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
