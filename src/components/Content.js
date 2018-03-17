import React from "react";
import MostActiveCompaniesContainer from "../containers/MostActiveCompaniesContainer";
import ConversationsPerMonthContainer from "../containers/ConversationsPerMonthContainer";
import MostActiveUsersContainer from "../containers/MostActiveUsersContainer";
import { Row, Col } from "react-bootstrap";
import InactiveUsersContainer from "../containers/InactiveUsersContainer";

const Content = () => (
  <div>
    <div>
      <h3 className={'page-header'}>
        Analytics Dashboard
      </h3>
    </div>
    <div>
      <Row>
        <Col sm={4}>
          <MostActiveCompaniesContainer />
          <InactiveUsersContainer />
        </Col>
        <Col sm={4}>
          <MostActiveUsersContainer />
        </Col>
        <Col sm={4}>
          <ConversationsPerMonthContainer />
        </Col>
      </Row>
    </div>
  </div>
);

export default Content;