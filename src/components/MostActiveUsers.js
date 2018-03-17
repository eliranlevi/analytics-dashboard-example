import React from "react";
import { Panel, Col, Row } from "react-bootstrap";
import "../styles/widgets.css";
import { MONTH_NAMES } from "../constants/constants";

const MostActiveUsers = ({ 
  users,
  selectedCompanyName,
  selectedMonth,
}) => (
  <Panel>
    <Panel.Heading>
      <h5>
        <strong>
          Most Active Users {selectedCompanyName ? (
            `of ${selectedCompanyName} in ${MONTH_NAMES[selectedMonth]}`
          ) : ''}
        </strong>
      </h5>
    </Panel.Heading>
    <Panel.Body>
      {selectedCompanyName ? (
        <div>
          {users.map(({ user: { email, name: { first, last } }, numOfConversations }) => (
            <Row key={email}>
              <Col xs={8}>{`${first} ${last}`}</Col>
              <Col xs={4} className={'text-right'}>{numOfConversations}</Col>
            </Row>
          ))}
        </div>
        ) : (
          `Please select a company from the 'Most Active Companies' list`
        )}
    </Panel.Body>
  </Panel>
);

export default MostActiveUsers;