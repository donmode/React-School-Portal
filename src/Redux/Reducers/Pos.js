const initialPosListState = {
  posLists: {},
};

const PosListReducer = function (state = initialPosListState, action) {
  switch (action.type) {
    case "PosListSuccess":
      return Object.assign({}, state, {
        posLists: Object.assign({}, state.posLists, {
          [action.key]: action.data,
        }),
      });
    case "SetPosProps":
      const result = action.data;
      return Object.assign({}, state, result);
    default:
      return state;
  }
};

export default PosListReducer;
