import connect from "react-redux/lib/connect/connect";
import MostActiveCompanies from "../components/MostActiveCompanies";
import { getTopMostActiveCompanies } from "../selectors/companies";
import { setCompany, setMonth } from "../actions/common";
import { getSelectedCompany } from "../selectors/common";

const mapStateToProps = state => ({
  companies: getTopMostActiveCompanies(state),
  selectedCompany: getSelectedCompany(state),
});

export default connect(mapStateToProps, {
  setCompany,
  setMonth,
})(MostActiveCompanies);