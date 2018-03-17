import React from "react";
import { Row, Col, Panel } from "react-bootstrap";
import { MONTH_NAMES } from "../constants/constants";

const ConversationsPerMonth = ({
  conversations,
}) => (
  <Panel>
    <Panel.Heading>
      <h5>
        <strong>Total Conversations Per Month</strong>
      </h5>
    </Panel.Heading>
    <Panel.Body>
      <div>
        {conversations.map(({ month, numOfConversations }) => (
          <Row key={month}>
            <Col xs={8}>{MONTH_NAMES[month]}</Col>
            <Col xs={4} className={'text-right'}>{numOfConversations}</Col>
          </Row>
        ))}
      </div>
    </Panel.Body>
  </Panel>
);

export default ConversationsPerMonth;