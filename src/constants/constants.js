import moment from "moment";

export const MAX_LAST_MONTHS = 6;
export const MONTHS_IN_YEAR = 12;
export const MONTH_NAMES = moment.months();
export const CUR_MONTH = moment().month();
export const MAX_ACTIVE_USERS_PERCENT = 100;

export const LAST_MONTHS = Array(MAX_LAST_MONTHS).fill().map((item, index) => {
  const monthDiff = CUR_MONTH - index;
  const monthVal = monthDiff > -1 ? monthDiff : MONTHS_IN_YEAR - Math.abs(monthDiff);
  const monthName = moment.monthsShort()[monthVal];

  return {
    monthName,
    monthVal,
  };
});