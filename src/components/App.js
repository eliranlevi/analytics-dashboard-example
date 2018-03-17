import React from "react";
import '../styles/layout.css';
import { Grid, Row, Col } from "react-bootstrap";
import Sidenav from "./Sidenav";
import Content from "./Content";

const App = props => (
  <Grid className={'layout'} fluid={true}>
    <Row>
      <Col sm={2} className={'sidenav'}>
        <Sidenav />
      </Col>
      <Col sm={10} className={'content'}>
        <Content />
      </Col>
    </Row>
  </Grid>
);

export default App;