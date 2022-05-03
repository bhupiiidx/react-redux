import { Viewuser } from "../../actionType";

const initialState = {};
function view(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Viewuser:
      return state;
    default:
      return state;
  }
}
export default view;
