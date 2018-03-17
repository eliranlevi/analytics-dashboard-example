import { createSelector } from "reselect";
import { getConversations } from "./conversations";
import { getUsersByEmail, getCompaniesById, getSelectedMonth, getSelectedCompany } from "./common";
import { slice, sortBy } from "lodash";
import moment from "moment";

export const getCompanies = createSelector(
  getCompaniesById,
  companiesById => Object.values(companiesById),
);

export const getSelectedCompanyName = createSelector(
  [getSelectedCompany, getCompaniesById],
  (selectedCompany, companiesById) => (
    selectedCompany ? companiesById[selectedCompany].name : ''
  ),
);

export const getMostActiveCompanies = createSelector(
  [getCompaniesById, getConversations, getUsersByEmail, getSelectedMonth],
  (companiesById, conversations, usersByEmail, selectedMonth) => (
    [
      ...conversations.reduce(
        (acc, conversationArr) => {
          const companyId = usersByEmail[conversationArr[0].from].company_id;
          const company = companiesById[companyId];
          const { name: companyName } = company;
          const { activity } = acc.get(companyName) || {};
          const inMonthConversations = conversationArr.filter(conversation => {
            return moment(conversation.date).month() === selectedMonth
          });

          inMonthConversations && acc.set(companyName, {
            ...company,
            activity: (
              activity
               ? activity + inMonthConversations.length
               : inMonthConversations.length
            ),
          });

          return acc;
        },
        new Map(),
      ).values(),
    ]
  )
);

export const getTopMostActiveCompanies = createSelector(
  [getMostActiveCompanies],
  mostActiveCompanies => (
    slice(sortBy(mostActiveCompanies, company => -company.activity), 0, 5)
  ),
);