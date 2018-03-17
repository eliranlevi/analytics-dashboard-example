import * as types from "../actionTypes/types";

const filter = (state = {}, action) => {
  switch(action.type) {
    case types.SET_COMPANY: {
      return {
        ...state,
        companyId: action.companyId,
      };
    }
    case types.SET_MONTH: {
      return {
        ...state,
        companyId: '',
        month: action.month,
      };
    }
    default: {
      return state;
    }
  }
}

export default filter;