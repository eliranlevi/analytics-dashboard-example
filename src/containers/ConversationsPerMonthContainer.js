import { getNumOfConversationsPerMonth } from "../selectors/conversations";
import ConversationsPerMonth from "../components/ConversationsPerMonth";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  conversations: getNumOfConversationsPerMonth(state)
});

export default connect(mapStateToProps)(ConversationsPerMonth);