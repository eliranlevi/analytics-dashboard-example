import React from "react";
import { Row, Col, Panel } from "react-bootstrap";
import CompanySelector from "./CompanySelector";
import { MONTH_NAMES } from "../constants/constants";

const InactiveUsers = ({
  inactiveUsersPercent,
  companies,
  inactiveCompanyId,
  setInactiveCompany,
}) => (
  <Panel>
    <Panel.Heading>
      <Row>
        <Col sm={6}>
          <h5>
            <strong>Inactive Users</strong>
          </h5>
        </Col>
        <Col sm={6}>
          <CompanySelector companies={companies} 
                           onSelectCompany={setInactiveCompany} />
        </Col>
      </Row>
    </Panel.Heading>
    <Panel.Body>
      <div>
        {inactiveCompanyId ? (
          inactiveUsersPercent.map(({ month, inactiveUsersPercent }) => (
            <Row key={month}>
              <Col xs={8}>{MONTH_NAMES[month]}</Col>
              <Col xs={4} className={'text-right'}>{inactiveUsersPercent}%</Col>
            </Row>
          ))
        ) : `Please select a company to see data`}
      </div>
    </Panel.Body>
  </Panel>
);

export default InactiveUsers;