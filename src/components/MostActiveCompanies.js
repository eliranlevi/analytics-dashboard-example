import React from "react";
import { Panel, Row, Col } from "react-bootstrap";
import MonthSelector from "./MonthSelector";
import "../styles/widgets.css";

const MostActiveCompanies = ({ 
  companies,
  selectedCompany,
  setCompany,
  setMonth,
}) => (
  <Panel>
    <Panel.Heading>
      <Row>
        <Col sm={8}>
          <h5>
            <strong>Most Active Companies</strong>
          </h5>
        </Col>
        <Col sm={4}>
          <MonthSelector onSelectMonth={month => setMonth(month)} />
        </Col>
      </Row>
    </Panel.Heading>
    <Panel.Body>
      <div>
        {companies.map(company => (
          <div key={company.id} className={company.id === selectedCompany ? 'selected' : ''}>
            <a onClick={() => setCompany(company.id)}>{company.name}</a>
            <div className={'pull-right'}>{company.activity}</div>
          </div>
        ))}
      </div>
    </Panel.Body>
  </Panel>
);

export default MostActiveCompanies;