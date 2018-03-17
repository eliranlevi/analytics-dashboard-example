// data selectors
export const getUsersByEmail = state => state.data.users.byEmail;
export const getConversationsByEmail = state => state.data.conversations.byEmail;
export const getCompaniesById = state => state.data.companies.byId;

// filter selectors
export const getSelectedCompany = state => state.filter.companyId;
export const getSelectedMonth = state => state.filter.month;

// inactive users selectors
export const getInactiveCompanyId = state => state.inactiveUsers.companyId;