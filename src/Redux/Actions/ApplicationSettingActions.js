import { GetApplicationSettingByName } from "../../Containers/ApplicationSettings/ApplicationSettingsMethods";

const ListApplicationSettingByName = (name) => (dispatch) => {
  return GetApplicationSettingByName(name, dispatch);
};

export { ListApplicationSettingByName };
