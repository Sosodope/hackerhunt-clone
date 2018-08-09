import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemProps } from "react-bootstrap";

class Topics extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="section-title">Topics</p>
        <ListGroup className="topics">
          <ListGroupItem>🚀 Development</ListGroupItem>
          <ListGroupItem>🖥 System</ListGroupItem>
          <ListGroupItem>🛠 Tools</ListGroupItem>
          <ListGroupItem>📉 Data Science</ListGroupItem>
          <ListGroupItem>⛓ Blockchain</ListGroupItem>
          <ListGroupItem>📱 Mobile</ListGroupItem>
          <ListGroupItem>✨ Awesome Lists</ListGroupItem>
          <ListGroupItem>🤟🏻Social</ListGroupItem>
          <ListGroupItem>🖼 Visual</ListGroupItem>
          <ListGroupItem>🍺 Open Source</ListGroupItem>
          <ListGroupItem>🗃 All Topics</ListGroupItem>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Topics;
