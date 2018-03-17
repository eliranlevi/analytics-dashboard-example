import data from "../data/MockData.json";
import { keyBy, groupBy } from "lodash";
import moment from "moment";

const getPreloadedState = (state = data) => ({
  data: {
    companies: {
      byId: keyBy(state.companies, 'id'),
    },
    users: {
      byEmail: keyBy(state.users, 'email'),
    },
    conversations: {
      byEmail: groupBy(state.conversations, 'from'),
    },
  },
  filter: {
    month: moment().month(),
    companyId: '',
  },
  inactiveUsers: {
    companyId: '',
  },
});

export default getPreloadedState;