import * as CONST from "../Const/index";
var recommendation_initialstate = {
  status: "",
  recommendations: ""
};
export default function(state = recommendation_initialstate, action) {
  debugger;
  switch (action.type) {
    case CONST.GET_RECOMMENDATIONS:
      return {
        ...state,
        status: action.payload.status,
        recommendations: action.payload.msg
      };
  }
  return state;
}
