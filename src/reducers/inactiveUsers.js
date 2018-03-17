import * as types from "../actionTypes/types";

const inactiveUsers = (state = {}, action) => {
  switch(action.type) {
    case types.SET_INACTIVE_COMPANY: {
      return {
        companyId: action.companyId,
      };
    }
    default: {
      return state;
    }
  }
}

export default inactiveUsers;