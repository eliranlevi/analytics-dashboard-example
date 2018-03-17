import { createSelector } from "reselect";
import { keyBy, sortBy, slice } from "lodash";
import { getUsersByEmail, getSelectedCompany, getConversationsByEmail, getSelectedMonth, getInactiveCompanyId } from "./common";
import moment from "moment";
import { LAST_MONTHS, MAX_ACTIVE_USERS_PERCENT } from "../constants/constants";

export const getUsers = createSelector(
  getUsersByEmail,
  usersByEmail => Object.values(usersByEmail),
);

export const getCompanyUsers = createSelector(
  [getSelectedCompany, getUsers],
  (selectedCompanyId, users) => (
    users.filter(user => user.company_id === selectedCompanyId)
  ),
);

export const getCompanyUsersByEmail = createSelector(
  getCompanyUsers,
  users => keyBy(users, 'email'),
);

export const getInactiveUsersPercentByMonth = createSelector(
  [getUsers, getConversationsByEmail, getInactiveCompanyId],
  (users, conversationsByEmail, companyId) => {
    const companyUsers = users.filter(user => user.company_id === companyId);
    const activeUsersPerMonth = companyUsers.reduce(
      (acc, user) => {
        const userConversations = conversationsByEmail[user.email] || [];
        const userActiveMonths = [
          ...new Set(
            userConversations.map(({ date }) => moment(date).month())
          ),
        ]
        .filter(month => (
          LAST_MONTHS.find(({ monthVal }) => (
            +monthVal === +month
          ))
        ));

        userActiveMonths.forEach(month => {
          acc[month] = (acc[month] || 0) + 1;
        });
        
        return acc;
      },
      {}
    );
    
    const inactiveUsersPercentByMonth = Object.keys(activeUsersPerMonth).map(month => ({
      month,
      inactiveUsersPercent: (
        MAX_ACTIVE_USERS_PERCENT - (activeUsersPerMonth[month] / companyUsers.length * MAX_ACTIVE_USERS_PERCENT)
      ).toFixed(2),
    }));

    return sortBy(
      inactiveUsersPercentByMonth,
      ({ month }) => month > 8 ? -month : -(2 + month)
    );
  },
);

export const getMostActiveUsers = createSelector(
  [getCompanyUsers, getConversationsByEmail, getSelectedCompany, getSelectedMonth],
  (users, conversationsByEmail, selectedCompanyId, selectedMonth) => (
    users.reduce(
      (acc, user) => {
        const isInSelectedCompany = user.company_id === selectedCompanyId;
        const hasConversations = !!conversationsByEmail[user.email];
        const isCountableUser = isInSelectedCompany && hasConversations;
        const numOfConversations = isCountableUser ? (
          conversationsByEmail[user.email].filter(conversation => (
            moment(conversation.date).month() === +selectedMonth
          )).length) : 0;

        isInSelectedCompany && acc.push({
          user,
          numOfConversations,
        });

        return acc;
      },
      [],
    )
  ),
);

export const getTopMostActiveUsers = createSelector(
  getMostActiveUsers,
  mostActiveUsers => (
    slice(sortBy(mostActiveUsers, user => -user.numOfConversations), 0, 5)
  ),
);
