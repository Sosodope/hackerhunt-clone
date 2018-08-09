import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Today from "./components/Today";
import { Grid, Row, Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Topics />
            </Col>
            <Col xs={12} md={9}>
              <Today />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
