import { SET_DATA } from "../action-creators/actions";

const initialState = {
    data : 42
};

export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state
  }
}