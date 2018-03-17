import { connect } from "react-redux";
import InactiveUsers from "../components/InactiveUsers";
import { getCompanies } from "../selectors/companies";
import { setInactiveCompany } from "../actions/common";
import { getInactiveUsersPercentByMonth } from "../selectors/users";
import { getInactiveCompanyId } from "../selectors/common";

const mapStateToProps = state => ({
  inactiveUsersPercent: getInactiveUsersPercentByMonth(state),
  inactiveCompanyId: getInactiveCompanyId(state),
  companies: getCompanies(state),
});

export default connect(mapStateToProps,{
  setInactiveCompany,
})(InactiveUsers);