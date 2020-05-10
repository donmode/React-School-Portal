const initialBiodata = {};

const BasicBiodataReducer = function (state = initialBiodata, action) {
  switch (action.type) {
    case "BasicBiodataProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default BasicBiodataReducer;
