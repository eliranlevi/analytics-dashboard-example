import * as types from "../actionTypes/types";

export const setCompany = companyId => (
  dispatch => (
    dispatch({
      type: types.SET_COMPANY,
      companyId,
    })
  )
);

export const setMonth = month => (
  dispatch => (
    dispatch({
      type: types.SET_MONTH,
      month: +month,
    })
  )
);

export const setInactiveCompany = companyId => (
  dispatch => (
    dispatch({
      type: types.SET_INACTIVE_COMPANY,
      companyId,
    })
  )
);
