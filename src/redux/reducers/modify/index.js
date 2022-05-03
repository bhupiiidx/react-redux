import { Adduser, Deleteuser } from "../../actionType";

const initialState = {};
function modify(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Adduser:
        if (state?.user){
            return { user: [...state.user, payload] };
        }
        else{
            return { user: [payload] }
        }
    case Deleteuser:
      return { user: state.user.filter((fil) => fil.id !== payload.id) };
    default:
      return state;
  }
}
export default modify;
