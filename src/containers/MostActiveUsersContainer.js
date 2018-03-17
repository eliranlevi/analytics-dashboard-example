import MostActiveUsers from "../components/MostActiveUsers";
import { connect } from "react-redux";
import { getTopMostActiveUsers } from "../selectors/users";
import { getSelectedCompanyName } from "../selectors/companies";
import { getSelectedMonth } from "../selectors/common";

const mapStateToPros = state => ({
  users: getTopMostActiveUsers(state),
  selectedCompanyName: getSelectedCompanyName(state),
  selectedMonth: getSelectedMonth(state),
});

export default connect(mapStateToPros)(MostActiveUsers);